import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DirectionProvider } from "@/components/ui/direction.tsx";
// import { Analytics } from "@vercel/analytics/react";
import "./index.css";
// import "@/i18n/i18n";
import "@/core/api/http";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "@/lib/query-client";
import { ThemeProvider } from "@/context/ThemeContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <DirectionProvider direction="rtl">
        <ThemeProvider>
          <App />
        </ThemeProvider>
        {/* <Analytics /> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </DirectionProvider>
    </QueryClientProvider>
  </StrictMode>,
);
