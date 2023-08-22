import prisma from "@/prisma/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.query;

  if (typeof token !== "string") {
    return res.status(400).json({ error: "Invalid token" });
  }

  const isTokenAuthentic = await prisma.verificationToken.findFirst({
    where: {
      token: token,
    },
  });
  if (!isTokenAuthentic) {
    return res.status(404).json({
      success: false,
      message: "Invalid token",
    });
  }

  const tokenIsValid =
    !!isTokenAuthentic && isTokenAuthentic.expires > new Date();

  if (!tokenIsValid) {
    return res.status(404).json({
      success: false,
      message: "Token has expired",
    });
  }

  await prisma.user.update({
    where: {
      id: isTokenAuthentic?.identifier,
    },
    data: {
      emailVerified: new Date(),
    },
  });

  return res.status(200).json({
    success: true,
    message: "Your Email is successfully verified",
  });
}
