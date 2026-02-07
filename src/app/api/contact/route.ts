import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, budget, service, message } =
      await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const ownerEmails = (process.env.CONTACT_EMAIL || "eng.muhammadhasnain@gmail.com")
      .split(",")
      .map((e) => e.trim());

    // Send notification email to you (the site owner)
    await resend.emails.send({
      from: "Contact Form <hello@mhasnain.com>",
      to: ownerEmails,
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #14A800; border-bottom: 2px solid #14A800; padding-bottom: 10px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #333; border-bottom: 1px solid #eee;">Name</td>
              <td style="padding: 10px; color: #555; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #333; border-bottom: 1px solid #eee;">Email</td>
              <td style="padding: 10px; color: #555; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            ${company ? `<tr><td style="padding: 10px; font-weight: bold; color: #333; border-bottom: 1px solid #eee;">Company</td><td style="padding: 10px; color: #555; border-bottom: 1px solid #eee;">${company}</td></tr>` : ""}
            ${budget ? `<tr><td style="padding: 10px; font-weight: bold; color: #333; border-bottom: 1px solid #eee;">Budget</td><td style="padding: 10px; color: #555; border-bottom: 1px solid #eee;">${budget}</td></tr>` : ""}
            ${service ? `<tr><td style="padding: 10px; font-weight: bold; color: #333; border-bottom: 1px solid #eee;">Service</td><td style="padding: 10px; color: #555; border-bottom: 1px solid #eee;">${service}</td></tr>` : ""}
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Muhammad Hasnain <hello@mhasnain.com>",
      to: email,
      replyTo: "hello@mhasnain.com",
      subject: "Thank you for reaching out! - Muhammad Hasnain",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #14A800;">Thank You, ${name}!</h2>
          <p style="color: #555; line-height: 1.6;">
            Thank you for reaching out! I've received your message and will get back to you within 2-4 business hours.
          </p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Your Message Summary</h3>
            ${service ? `<p style="color: #555;"><strong>Service:</strong> ${service}</p>` : ""}
            ${budget ? `<p style="color: #555;"><strong>Budget:</strong> ${budget}</p>` : ""}
            <p style="color: #555; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #888; font-size: 14px;">
            Muhammad Hasnain - AI & Software Solutions<br/>
            <a href="mailto:eng.muhammadhasnain@gmail.com" style="color: #14A800;">eng.muhammadhasnain@gmail.com</a><br/>
            <a href="https://wa.me/923071606798" style="color: #14A800;">WhatsApp: +92 307 1606798</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
