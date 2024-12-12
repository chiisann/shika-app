import { NextResponse } from "next/server";

export async function GET() {
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json({ message: "hello" });
}
