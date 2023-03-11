import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { router } from "./context";
import { helloRouter } from "./routes/hello";

const PORT = 2022;

const appRouter = router({
    hello: helloRouter,
});

export type AppRouter = typeof appRouter;

const { listen } = createHTTPServer({
    router: appRouter,
});

console.log(`listening on localhost:${PORT}`);

listen(PORT);