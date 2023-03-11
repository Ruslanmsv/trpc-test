// import http from 'node:http';
// import { createHTTPHandler } from "@trpc/server/adapters/standalone";

import { router } from "./context";
import { helloRouter } from "./routes/hello";

// const PORT = 2022;

export const appRouter = router({
    hello: helloRouter,
});

export type AppRouter = typeof appRouter;

// const handler = createHTTPHandler({
//     router: appRouter,
// });

// const server = http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Request-Method', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
//     res.setHeader('Access-Control-Allow-Headers', '*');
//     if (req.method === 'OPTIONS') {
//         res.writeHead(200);
//         return res.end();
//     }
//     handler(req, res);
// })

// server.listen(PORT, () => {
//     console.log(`listening on localhost:${PORT}`)
// })
