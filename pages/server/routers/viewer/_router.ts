import { procedure, router, mergeRouters } from "../../trpc";
import { authRouter } from "./auth/_router";
import { leadsRouter } from "./leads/_router";
export const viewerRouter = mergeRouters(
  router({
    leads: leadsRouter,
    auth: authRouter,
  })
);
