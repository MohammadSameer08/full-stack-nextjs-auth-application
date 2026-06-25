/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function getDataFromToken(request: NextRequest) {
  const token = request.cookies.get("token");
  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token.value, process.env.TOKEN_SECRET as string);
    return decoded;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
