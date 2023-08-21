import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { ThemeProvider } from "@emotion/react";

import axios from "axios";
import { theme } from "styles/theme";
import PortfolioProvider from "context/portfolioProvider";

/* import NextNProgress from "nextjs-progressbar"; */

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
        fetcher: (url: string) => axios.get(url).then((res) => res.data),
      }}
    >
      <PortfolioProvider>
        <ThemeProvider theme={theme}>
          {/* <NextNProgress color='#FF4069' showOnShallow={true} /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </PortfolioProvider>
    </SWRConfig>
  );
}
