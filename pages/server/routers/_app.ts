import { z } from "zod";
import { procedure, router } from "../trpc";
import { viewerRouter } from "./viewer/_router";

export const appRouter = router({
  viewer: viewerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
