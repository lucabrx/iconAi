import { createTRPCRouter } from "~/server/api/trpc";
import { generateRouter } from "~/server/api/routers/generateRouter";
import { checkoutRouter } from "./routers/checkoutRouter";
import { iconsRouter } from "./routers/iconRouter";
import { userRouter } from "./routers/userRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  generate: generateRouter,
  checkout: checkoutRouter,
  icons: iconsRouter,
  users: userRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
