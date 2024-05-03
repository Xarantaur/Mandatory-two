import "dotenv/config";
import db from "../database/connection.js";
import { Router } from "express";
import { login, hashPassword } from "../util/passwordUtil.js";
import { sendEmail } from "../util/resend.js";

const router = Router();

router.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;
  // håndter manglende info:
  if (!email) {
    res.status(400).send({ data: "Missing email " });
  }

  if (!password) {
    res.status(400).send({ data: "Missing password " });
  }
  let hashedPassword = await hashPassword(password);

  await db.run(`INSERT INTO accounts (email, password) VALUES (?, ?)`, [email, hashedPassword]);

  await sendEmail()
});

router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    res.status(400).send({ data: "Missing email " });
  }

  if (!password) {
    res.status(400).send({ data: "Missing password " });
  }
  req.session.user = {
    email: req.body.email,
  };
  const result = await login(email, password);
  if(result){
    res.send({ data: true})
  }
  await sendEmail()
});

export default router;
