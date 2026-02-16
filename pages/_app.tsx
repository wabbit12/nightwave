import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/nightwavelogo.png" />
        <link rel="apple-touch-icon" href="/nightwavelogo.png" />
        <title>Nightwave Studio - Dark UI & Motion Design</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

