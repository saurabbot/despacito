import { procedure, router, mergeRouters } from "../../trpc";
import { leadsRouter } from "./leads/_router";
export const viewerRouter = mergeRouters(
  router({
    leads: leadsRouter,
  })
);
