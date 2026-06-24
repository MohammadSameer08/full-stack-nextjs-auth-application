/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json(
      { message: "Logout successful" },
      { status: 200 },
    );
    response.cookies.delete("token");
    return response;
  } catch (error: any) {
    return NextResponse.json({ message: "Logout failed" }, { status: 500 });
  }
}
