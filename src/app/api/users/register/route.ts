import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    messages: "users/register api accessed with post method",
  });
}
export async function POST(request: NextRequest) {
  return NextResponse.json({
    messages: "users/register api accessed with post method",
  });
}
