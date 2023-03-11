// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { createTRPCReact } from "@trpc/react-query";
import { createTRPCNext } from "@trpc/next";
import { httpBatchLink } from "@trpc/client";
// import { useState } from "react";
import type { AppRouter } from "../server";
import { Hello } from "../components/Hello";

function getBaseUrl() {
  if (typeof window !== "undefined") {
    return "";
  }

  if (process.env.VERCEL_URI) {
    return `https://${process.env.VERCEL_URI}`;
  }

  return `http://localhost:${process.env.PORT ?? 3000}`;
}

// export const api = createTRPCReact<AppRouter>();
export const api = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [httpBatchLink({ url: getBaseUrl() + "/api" })],
    };
  },
});

// export default function Index() {
//   const [queryClient] = useState(() => new QueryClient());
//   const [trpcClient] = useState(() =>
//     api.createClient({
//       links: [httpBatchLink({ url: "http://localhost:2022" })],
//     })
//   );

//   return (
//     <api.Provider client={trpcClient} queryClient={queryClient}>
//       <QueryClientProvider client={queryClient}>
//         <Hello />
//       </QueryClientProvider>
//     </api.Provider>
//   );
// }
export default function Index() {
  return <Hello />;
}
