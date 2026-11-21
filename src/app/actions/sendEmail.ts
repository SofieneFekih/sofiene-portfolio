"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactActionState {
  status: "idle" | "error" | "success";
  message: string;
}

export async function sendContactEmail(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  // 1. Honeypot trap: spam bots fill hidden fields; humans leave them blank
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    return { status: "success", message: "Message sent successfully." };
  }

  // 2. Sanitize & validate fields
  const name = String(formData.get("name") ?? "").replace(/[\r\n]/g, " ").trim();
  const replyTo = String(formData.get("email") ?? "").replace(/[\r\n]/g, "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !replyTo || !message) {
    return { status: "error", message: "Please fill out all required fields." };
  }

  if (name.length > 100 || replyTo.length > 120 || message.length > 2000) {
    return { status: "error", message: "One or more fields exceed the allowed length." };
  }

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
  if (!emailRegex.test(replyTo)) {
    return { status: "error", message: "Please provide a valid email address." };
  }

  const receiver = process.env.CONTACT_RECEIVER_EMAIL;
  if (!receiver || !process.env.RESEND_API_KEY) {
    return { status: "error", message: "Mail service is not configured on the server." };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [receiver],
      replyTo,
      subject: `Portfolio Inquiry from ${name}`,
      text: `Name: ${name}\nReply-To: ${replyTo}\n\nMessage:\n${message}`,
    });

    if (error) {
      return { status: "error", message: "Failed to send message. Please try again later." };
    }

    return {
      status: "success",
      message: "Thank you! Your message has been delivered directly to Sofiene.",
    };
  } catch {
    return { status: "error", message: "Unexpected server error. Please try again." };
  }
}