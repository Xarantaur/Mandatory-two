import "dotenv/config";
import { Router } from "express";
import { sendEmail } from "../util/resend.js"

const router = Router();

router.get("/api/sendemail", async ( req, res) => {
  await sendEmail();
  res.send({ data: "success"})
})

export default router