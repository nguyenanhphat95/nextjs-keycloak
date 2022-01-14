import type { AppProps } from "next/app";
import Head from "next/head";

import { CacheProvider, EmotionCache } from "@emotion/react";

import CssBaseline from "@mui/material/CssBaseline";

import ThemeProvider from "providers/ThemeProvider";
import QueryClientProvider from "providers/QueryClientProvider";

import createEmotionCache from "setup/material-ui/createEmotionCache";

import "./../styles/globals.css";
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider>
        <ThemeProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
}
