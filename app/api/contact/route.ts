// app/api/contact/route.ts
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "amine.zouguig.linux@gmail.com", // Replace with your email
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Email send failed", err);
    return Response.json({ success: false }, { status: 500 });
  }
}
