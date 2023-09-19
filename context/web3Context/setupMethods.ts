
import { CustomProvider } from "typings/CustomProvider";
import Web3 from "web3";
import {
  balanceOf,
  connect,
  getBalance,
  loadContract,
  switchChain,
} from "./web3Methods ";


interface setupMethodProps {
  web3: Web3 | null;
  provider: CustomProvider | null ;
}

export const setupMethods = ({ web3, provider }: setupMethodProps) => {
  if(provider && web3 )
  return {
    connect: connect(provider),
    switchChain: switchChain(provider),
    getBalance: getBalance(web3),
    balanceOf: balanceOf(web3),
    loadContract: loadContract(web3)
  };
};

export default setupMethods;
