import * as trpcNext from "@trpc/server/adapters/next";
import { leadsRouter } from "@/pages/server/routers/viewer/leads/_router";
export default trpcNext.createNextApiHandler({
  router: leadsRouter,
  createContext: () => ({}),
});
