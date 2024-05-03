import "dotenv/config"
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);


export async function sendEmail() {
    await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["resendthismail@gmail.com"],
    subject: "hello world",
    html: "<strong>it works!</strong>",
  });
}

