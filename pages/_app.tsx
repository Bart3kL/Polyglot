import { useState } from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { DM_Serif_Display } from "@next/font/google";
import NextNProgress from "nextjs-progressbar";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import "../src/styles/_reset.scss";
import "../src/styles/_variables.scss";
import Layout from "@/src/components/layout";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin-ext"],
});
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={session}>
          <style jsx global>{`
            :root {
              --dmSerifDisplay-font: ${dmSerifDisplay.style.fontFamily};
            }
          `}</style>
          <NextNProgress
            color="#29D"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
