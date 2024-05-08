import { IFile } from "@/types";
import streamToBuffer from "@/util/streamToBuffer";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.formData();
  if (!data) {
    return NextResponse.json({ success: false });
  }

  // Extract file data from formData
  const name = data.get("name");
  const email = data.get("email");
  const phone = data.get("phone");
  const cvFile = data.get("cv") as IFile;
  const audioFile = data.get("audio") as IFile;

  // Create transporter for sending email
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  // Define email message
  const message = {
    from: `${email}`,
    to: process.env.NODEMAILER_USER, // Admin email address
    subject: "Test",
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
    `,
    //converts streams to buffers
    attachments: [
      {
        filename: cvFile.name,
        content: await streamToBuffer(cvFile.stream()), // Convert cvFile stream to buffer
      },
      {
        filename: audioFile.name,
        content: await streamToBuffer(audioFile.stream()), // Convert audioFile stream to buffer
      },
    ],
  };

  try {
    await transporter.sendMail(message);
    console.log("Email sent successfully");
    return NextResponse.json({
      success: true,
      message: "Received form data and sent email",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to send email",
    });
  }
}
