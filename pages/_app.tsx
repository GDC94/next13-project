import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { ThemeProvider } from "@emotion/react";
import axios from "axios";
import { theme } from "styles/theme";
import PortfolioProvider from "context/portfolioContext/portfolioProvider";
import { Web3PortalProvider } from "context/web3Context/Web3Provider";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
        fetcher: (url: string) => axios.get(url).then((res) => res.data),
      }}
    >
      <Web3PortalProvider>
        <PortfolioProvider>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </PortfolioProvider>
      </Web3PortalProvider>
    </SWRConfig>
  );
}
