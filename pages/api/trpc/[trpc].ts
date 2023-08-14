import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "@/pages/server/routers/_app";

export default trpcNext.createNextApiHandler({
  router: appRouter, // Pass an array of routers
  createContext: () => ({}), // Customize your context if needed
});