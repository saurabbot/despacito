import { z } from "zod";
import prisma from "@/prisma/prisma";
import { procedure, router } from "@/pages/server/trpc";

export const jobsRouter = router({
  addNewJob: procedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        location: z.string(),
        salary: z.number(),
        company: z.string(),
      })
    )
    .mutation(async (opts) => {
      try {
      } catch (err) {
        console.error("Error while adding new job: ", err);
        throw new Error("Failed to add new job");
      }
    }),
});
