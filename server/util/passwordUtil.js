import bcrypt from "bcrypt";
import db from "../database/connection.js";

const saltRounds = 14;

// hashes the plaintext password when signing up
export async function hashPassword(plaintextPassword) {
  const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
  return hashedPassword;
}

export async function login(email, plaintextPassword) {
  const user = await db.get(`SELECT * FROM accounts WHERE email = ?`, email);

  if (!user) {
    return "invalid user";
  }
 
  const isSame = await bcrypt.compare(plaintextPassword, user.password);

  if (isSame) {
    console.log("Authentication successful")
    return true;
} else {
    console.log("Incorrect email or password")
    throw new Error("Incorrect email or password")
}
}
