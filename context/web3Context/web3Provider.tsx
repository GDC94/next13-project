
import setupMethods from "./setupMethods";
import useLoadProvider from "./hooks/useLoadProvider";
import Web3Context from "./web3Context";

type web3ProviderProps = { children: React.ReactNode };

export const Web3PortalProvider = ({ children }: web3ProviderProps) => {
  const web3Api = useLoadProvider();
  const { web3, provider, isLoading } = web3Api;
  const _web3Api = {
    ...web3Api,
    requireInstall: Boolean(!isLoading && !web3),
    supportedProvider: provider?.isPortal,
    methods: setupMethods({ web3, provider }),
  };

  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
};
