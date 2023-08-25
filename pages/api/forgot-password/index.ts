import type { NextApiRequest, NextApiResponse } from "next";
import * as z from "zod";
import prisma from "@/prisma/prisma";
import { passwordResetRequest } from "@/utils/auth/passwordResetRequest";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const email = z.string().email().safeParse(req.body.email);
  if (!email.success) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }
  const user = await prisma.user.findUnique({
    where: {
      email: email.data,
    },
  });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User wasn't found",
    });
  }
  try {
    await passwordResetRequest(user);
    return res.status(201).json({
      success: true,
      message: "Email reset link sent",
      user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}
