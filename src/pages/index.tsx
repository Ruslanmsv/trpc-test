import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import type { AppRouter } from "../server";
import { Hello } from "../components/Hello";

export const api = createTRPCReact<AppRouter>();

export default function Index() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [httpBatchLink({ url: "http://localhost:2022" })],
    })
  );

  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Hello />
      </QueryClientProvider>
    </api.Provider>
  );
}
