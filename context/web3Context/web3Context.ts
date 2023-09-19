/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import Web3 from "web3";
import { createContext, useContext } from "react";
import { Contract } from "web3-eth-contract";
import { CustomProvider } from "typings/CustomProvider";

export interface Web3ContextMethods {
  connect: () => Promise<void>;
  switchChain: (chainId: string) => Promise<void>;
  getBalance: (address: string) => Promise<string>;
  balanceOf: (tokenAddress: string, walletAddress: string) => Promise<number>;
  loadContract: (abi, contractAddress: string) => Contract;
}

export interface web3ContextState {
  isLoading: boolean;
  methods: Web3ContextMethods;
  requireInstall: boolean /* Require install any wallet extension */;
  supportedProvider: boolean /* Provider is Portal */;
  provider: CustomProvider;
  web3: Web3;
}

const Web3Context = createContext<web3ContextState | undefined>(undefined);

export default Web3Context;

export const useWeb3 = () => {
  const context = useContext(Web3Context);

  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
