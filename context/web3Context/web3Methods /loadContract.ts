import Web3 from "web3";
import { Contract } from "web3-eth-contract";

const loadContract =
  (web3: Web3) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (abi: any, contractAddress: string): Contract<any> => {
    return new web3.eth.Contract(abi, contractAddress);
  };

export default loadContract;
