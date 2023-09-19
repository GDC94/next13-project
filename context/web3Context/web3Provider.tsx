import setupMethods from "./setupMethods";
import useLoadProvider from "./hooks/useLoadProvider";
import Web3Context, { web3ContextState } from "./web3Context";
import { useMemo } from "react";

type web3ProviderProps = { children: React.ReactNode };

export const Web3PortalProvider = ({ children }: web3ProviderProps) => {
  const web3Api = useLoadProvider();

  const _web3Api = useMemo<web3ContextState>(() => {
    const { web3, provider, isLoading } = web3Api;
    return {
      ...web3Api,
      requireInstall: Boolean(!isLoading && !web3),
      supportedProvider: provider?.isPortal,
      methods: setupMethods({ web3, provider }),
    };
  }, [web3Api]);


  

  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
};
