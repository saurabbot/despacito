import type { User } from "@prisma/client";
import dayjs from "dayjs";
import prisma from "@/prisma/prisma";
import { sendResetLink } from "../emailUtils/auth";

const createResetLink = async (email: string | null): Promise<string> => {
  try {
    const currentTime = dayjs();
    const expirationTime = currentTime.add(6, "hour").toDate();
    const createPasswordResetReq = email
      ? await prisma.resetPasswordRequest.create({
          data: {
            email: email,
            expiry: expirationTime,
          },
        })
      : null;
    if (!createPasswordResetReq) {
      throw new Error("Failed to create password reset request.");
    }
    const resetLink = `${process.env.NEXT_PUBLIC_WEBAPP_URL}/forgot_password/${createPasswordResetReq.id}?email=${email}`;
    return resetLink;
  } catch (error) {
    console.error("Error creating reset link:", error);
    throw new Error("Failed to create password reset link.");
  }
};
export const passwordResetRequest = async (user: User) => {
  const { email } = user;
  const resetLink = await createResetLink(email);
  await sendResetLink(user, resetLink);
};
