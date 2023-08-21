import { AxiosRequestConfig } from "axios";

// EXPLORER API
export interface headersExplorer extends Partial<AxiosRequestConfig> {
  headers: {
    "X-Portal-Chain-Id": number | string;
    Authorization?: string;
  };
  withCredentials: boolean;
  xsrfCookieName: string;
  xsrfHeaderName: string;
}

// Fetcher Props

export interface FetcherProps {
  url: string;
  config?: headersExplorer;
}
