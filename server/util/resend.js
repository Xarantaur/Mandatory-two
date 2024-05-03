import "dotenv/config"
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);


export async function sendEmail(email) {
    await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [email],
    subject: "Hey you!",
    html: "welcome to my mandatory two project",
  });
}

