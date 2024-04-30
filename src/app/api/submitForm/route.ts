import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import streamToBuffer from "stream-to-buffer";

// Define the File type
interface IFile {
  name: string;
  size: number;
  type: string;
  arrayBuffer(): Promise<ArrayBuffer>;
  slice(start?: number, end?: number, contentType?: string): Blob;
  stream(): ReadableStream;
}

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

  console.log("CV File:", cvFile);
  console.log("Audio File:", audioFile);

  // Check if cvFile is not null or undefined and if it has the necessary properties
  if (
    cvFile &&
    typeof cvFile.name === "string" &&
    typeof cvFile.size === "number"
  ) {
    // Validate cvFile
    console.log("CV File Name:", cvFile.name);
    console.log("CV File Size:", cvFile.size);
  } else {
    console.error("CV File is not a valid file object");
  }

  // Similar checks for audioFile
  if (
    audioFile &&
    typeof audioFile.name === "string" &&
    typeof audioFile.size === "number"
  ) {
    // Validate audioFile
    console.log("Audio File Name:", audioFile.name);
    console.log("Audio File Size:", audioFile.size);
  } else {
    console.error("Audio File is not a valid file object");
  }

  // Process file data
  const cvName = cvFile.name;
  const audioName = audioFile.name;

  // Create transporter for sending email
  const transporter = nodemailer.createTransport({
    // Provide your SMTP details here
    host: "smtp.example.com",
    port: 587,
    secure: false, // Set to true if using SSL
    auth: {
      user: "your_email@example.com",
      pass: "your_password",
    },
  });

  // Convert streams to buffers
  const cvBuffer = await streamToBuffer(cvFile.stream());
  const audioBuffer = await streamToBuffer(audioFile.stream());

  // Define email message
  const message = {
    from: `${email}`,
    to: "alluriah@gmail.com", // Admin email address
    subject: "New Job Application",
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
    `,
    attachments: [
      {
        // Attach CV file
        filename: cvFile.name,
        content: cvBuffer, // Buffer
      },
      {
        // Attach audio file
        filename: audioFile.name,
        content: audioBuffer, // Buffer
      },
    ],
  };

  try {
    // Send email
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
