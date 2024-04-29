// import { NextResponse } from "next/server";

// // To handle a GET request to /api
// export async function GET(request: NextResponse) {
//   // Do whatever you want
//   return NextResponse.json({ message: "Hello World" }, { status: 200 });
// }

import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import { IFormData } from "@/dbConfig/dbConfig";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.formData();
  console.log("data from frontend:", data);
  // const cvFile: File | null = data.get("cvFile") as unknown as File;
  // const audioFile: File | null = data.get("audioFile") as unknown as File;

  // console.log("cvFile", cvFile);
  // console.log("audioFile", audioFile);

  if (!data) {
    return NextResponse.json({ success: false });
  }
}
