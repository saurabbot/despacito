import type { User } from "@prisma/client";
import { mailOptions, transporter } from "@/nodemailer";

const sendResetLink = async (
  user: User | null,
  resetLink: string
): Promise<void> => {
  try {
    await transporter.sendMail({
      ...mailOptions,
      to: user?.email,
      subject: "Password Reset Link",
      text: `Click on this link-> ${resetLink}`,
    });
  } catch (err) {
    console.log(err);
  }
};

export { sendResetLink };
