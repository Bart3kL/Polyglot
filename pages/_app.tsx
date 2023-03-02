import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { DM_Serif_Display } from "@next/font/google";
import NextNProgress from "nextjs-progressbar";
import { QueryClientProvider } from "@/src/components/lib/react-query";

import "../src/styles/_global.scss";
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
  return (
    <QueryClientProvider>
      <ToastContainer
        position="bottom-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
    </QueryClientProvider>
  );
}
