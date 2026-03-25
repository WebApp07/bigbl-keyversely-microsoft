import { NextRequest, NextResponse } from "next/server";
import { runAutoBlog } from "@/lib/auto-blog";

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const result = await runAutoBlog(3);
  return NextResponse.json(result);
}
