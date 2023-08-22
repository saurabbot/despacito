import { z } from "zod";
import { procedure, router } from "@/pages/server/trpc";
import prisma from "@/prisma/prisma";
import { mailOptions, transporter } from "@/nodemailer";
import * as crypto from "crypto";

import * as bcrypt from "bcrypt";
export const authRouter = router({
  signUpUser: procedure
    .input(
      z.object({
        username: z.string(),
        email: z.string().email(),
        is_candidate: z.boolean(),
        is_employer: z.boolean(),
        password: z.string().min(8),
      })
    )
    .mutation(async (opts) => {
      try {
        const existingUser = await prisma.user.findFirst({
          where: {
            email: opts.input.email,
          },
        });
        if (existingUser) {
          throw new Error("User already exists");
        }
        const hashedPassword = await bcrypt.hash(opts.input.password, 10);
        const verificationToken = crypto.randomBytes(20).toString("hex");
        const expirationDate = new Date();
        expirationDate.setHours(expirationDate.getHours() + 20);
        const newUser = await prisma.user.create({
          data: {
            ...opts.input,
            password: hashedPassword,
          },
        });
        await prisma.verificationToken.create({
          data: {
            identifier: newUser.id,
            token: verificationToken,
            expires: expirationDate,
          },
        });
        await transporter.sendMail({
          ...mailOptions,
          to: opts.input.email,
          subject: "Verify you mail",
          text: `<h1>Please verify this email </h1><a href='http://localhost:3000/api/verify_email?token=${verificationToken}'>hit this link</a>`,
        });
        return newUser;
      } catch (err) {
        console.error(err);
      }
    }),
});

export type AppRouter = typeof authRouter;
