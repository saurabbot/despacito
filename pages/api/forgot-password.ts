import type { NextApiRequest, NextApiResponse } from "next";
import * as z from "zod";
import prisma from "@/prisma/prisma";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const email = z.string().email().safeParse(req.body.email);
  if (!email.success) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }
  res.status(201).json({
    success: true,
    message: "Email reset link sent",
  });
}
