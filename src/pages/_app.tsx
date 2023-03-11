import type { AppType } from "next/app";
import { api } from "./index";

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import Index from "./index";

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <StrictMode>
//     <Index />
//   </StrictMode>
// );

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
