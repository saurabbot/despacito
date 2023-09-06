import { string, z } from "zod";
import prisma from "@/prisma/prisma";
import { procedure, router } from "@/pages/server/trpc";

export const candiateFormRouter = router({
  addNewCandidate: procedure
    .input(
      z.object({
        email: z.string().email(),
        full_name: z.string(),
        skills: z.array(z.string()),
        current_organisation: z.string(),
        age: z.number(),
        resume_url: z.string(),
      })
    )
    .mutation(async (opts) => {
      try {
        const newCandidate = await prisma.candidate.create({
          data: {
            resume_url: opts.input.resume_url,
            full_name: opts.input.full_name,
            skills: opts.input.skills,
            current_organisation: opts.input.current_organisation,
            age: opts.input.age,
            email: opts.input.email,
            skill_rating: {},
            previous_organisation_data: {},
            total_years_experience: 4,
          },
        });
        if (!newCandidate) {
          throw new Error("Coudnt create a candidate profile");
        }
        return newCandidate;
      } catch (err) {
        console.log(err);
        throw new Error("Internal Server Error");
      }
    }),
  getSkills: procedure.query(async () => {
    try {
      const allSkills = await prisma.skill.findMany();
      return allSkills;
    } catch (err) {
      throw new Error("Internal Server Error");
    }
  }),
});
export type AppRouter = typeof candiateFormRouter;
