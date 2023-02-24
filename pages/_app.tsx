import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { DM_Serif_Display } from "@next/font/google";

import "../src/styles/_reset.scss";
import "../src/styles/_variables.scss";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin-ext"],
});

import Layout from "@/src/components/layout";

export default function App({
  Component,
  pageProps: { pageProps, session },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <style jsx global>{`
        :root {
          --dmSerifDisplay-font: ${dmSerifDisplay.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
