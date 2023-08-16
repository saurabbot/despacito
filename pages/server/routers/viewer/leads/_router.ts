import { z } from "zod";
import prisma from "@/prisma/prisma";
import { procedure, router } from "@/pages/server/trpc";
import { mailOptions, transporter } from "@/nodemailer";

// Define the leadsRouter using trpc router and procedures
export const leadsRouter = router({
  addNewsLetterSubscriber: procedure
    .input(
      z.object({
        email: z.string(),
      })
    )
    .mutation(async (opts) => {
      try {
        const existingLead = await prisma.lead.findFirst({
          where: {
            email: opts.input.email,
          },
        });
        if (existingLead) {
          throw new Error("Lead already exists");
        }
        const newLead = await prisma.lead.create({
          data: {
            email: opts.input.email,
          },
        });
        await transporter.sendMail({
          ...mailOptions,
          to: opts.input.email,
          text: "This is a test mail",
          subject: "Thankyou for subscribing to our newsletter",
        });
        return newLead;
      } catch (err) {
        console.error("Error while adding newsletter subscriber:");
        throw new Error("Failed to add newsletter subscriber");
      }
    }),
});
export type AppRouter = typeof leadsRouter;
