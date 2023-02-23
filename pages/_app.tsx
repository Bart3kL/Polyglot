import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Montserrat } from "@next/font/google";
import "../src/styles/_reset.scss";
import "../src/styles/_variables.scss";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps: { pageProps, session },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
