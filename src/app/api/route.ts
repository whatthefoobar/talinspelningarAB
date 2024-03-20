// import { NextResponse } from "next/server";

// // To handle a GET request to /api
// export async function GET(request: NextResponse) {
//   // Do whatever you want
//   return NextResponse.json({ message: "Hello World" }, { status: 200 });
// }

// pages/api/submitForm.ts

import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Process form data here
      const { name, email, phone, cvFile, audioFile } = req.body;

      // Store form data in the database (e.g., using an ORM like Prisma Mongodb)

      // Send email
      const transporter = nodemailer.createTransport({
        // Configure your email provider here
      });

      await transporter.sendMail({
        from: "your@example.com",
        to: "recipient@example.com",
        subject: "New Job Application",
        html: `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>CV File: ${cvFile}</p>
          <p>Audio File: ${audioFile}</p>
        `,
      });

      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error submitting form:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
