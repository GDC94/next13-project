import Web3 from "web3";
import { CustomProvider } from "typings/CustomProvider";
import {
  balanceOf,
  connect,
  getBalance,
  getTransactionCount,
  loadContract,
  switchChain,
} from "./web3Methods ";

interface setupMethodProps {
  web3: Web3;
  provider: CustomProvider;
}

export const setupMethods = ({ web3, provider }: setupMethodProps) => {
  return {
    connect: connect(provider),
    switchChain: switchChain(provider),
    getBalance: getBalance(web3),
    balanceOf: balanceOf(web3),
    getTransactionCount: getTransactionCount(web3),
    loadContract: loadContract(web3),
  };
};

export default setupMethods;
