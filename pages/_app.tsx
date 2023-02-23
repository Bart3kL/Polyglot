import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Montserrat } from "@next/font/google";
import "../src/styles/_reset.scss";
import "../src/styles/_variables.scss";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

import Layout from "@/src/components/layout";

export default function App({
  Component,
  pageProps: { pageProps, session },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className={montserrat.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </SessionProvider>
  );
}
