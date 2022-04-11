import { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"

import './styles.css';

function CustomApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to admin-app!</title>
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default CustomApp;
