/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextResponse } from "next/server";
import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

connect();
export async function GET(request: Request) {
  try {
    const decodedToken: any = getDataFromToken(request as any);
    if (!decodedToken || !decodedToken.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    console.log("Decoded token:", decodedToken);
    const user = await User.findById(decodedToken.id).select("-password");
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json({
      message: "User found",
      status: 200,
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
