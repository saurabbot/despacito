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
  const legitUser = await prisma.user.findFirst({
    where: {
      verification_token: token,
    },
  });
  if (!legitUser) {
    return res.status(401).json({
      success: false,
      message: "Unathorized user",
    });
  }
  await prisma.user.update({
    where: {
      verification_token: token,
    },
    data: {
      is_emailVerified: true,
    },
  });
  res
    .status(200)
    .json({ success: true, message: "Your Email is succefully verified" });
}
