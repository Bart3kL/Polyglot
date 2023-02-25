import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { DM_Serif_Display, Overpass } from "@next/font/google";

import "../src/styles/_reset.scss";
import "../src/styles/_variables.scss";
import Layout from "@/src/components/layout";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin-ext"],
});
const overpass = Overpass({
  weight: ["400"],
  subsets: ["latin-ext"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
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
