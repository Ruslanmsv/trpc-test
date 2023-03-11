import { initTRPC } from "@trpc/server";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const PORT = 2022;

const t = initTRPC.create();

const publicProcedure = t.procedure;
const router = t.router;

const appRouter = router({
    hello: publicProcedure.query(() => 'hello from trpc standalone server')
});

export type AppRouter = typeof appRouter;

const { listen } = createHTTPServer({
    router: appRouter,
});

console.log(`listening on localhost:${PORT}`);

listen(PORT);