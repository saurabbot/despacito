import { z } from "zod";
import { db } from "@/drizzle/db";
import { procedure, router } from "@/pages/server/trpc";
import { leads } from "@/drizzle/db/schema";
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
      const newLead = await db.insert(leads).values({
        email: opts.input.email,
      });
      try {
        await transporter.sendMail({
          ...mailOptions,
          to: opts.input.email,
          text: "This is a test mail",
          subject: "Thankyou for subscribing to our newsletter",
        });
      } catch (err) {}

      return "success";
    }),
});
export type AppRouter = typeof leadsRouter;
