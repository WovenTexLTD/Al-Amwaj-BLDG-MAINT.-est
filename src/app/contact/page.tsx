import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs"; // ensure Node runtime

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const reason = String(form.get("reason") || "");
    const message = String(form.get("message") || "");
    const cv = form.get("cv") as File | null;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    // If CV provided, save to /tmp
    let savedPath: string | null = null;
    if (cv && typeof cv === "object") {
      const bytes = Buffer.from(await cv.arrayBuffer());
      const filenameSafe = cv.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
      const filePath = path.join("/tmp", `${Date.now()}_${filenameSafe}`);
      await writeFile(filePath, bytes);
      savedPath = filePath;
    }

    // Here you could forward the details by email or push to a CRM.
    // e.g., send with Resend/Nodemailer using env vars.

    return NextResponse.json({
      ok: true,
      savedPath, // for debugging; remove if not needed
      received: { name, email, phone, reason, message, hasCV: !!cv },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Server error" }, { status: 500 });
  }
}
