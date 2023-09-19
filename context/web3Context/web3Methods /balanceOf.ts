/* eslint-disable @typescript-eslint/no-explicit-any */
import Web3 from "web3";
import ERC20 from "../abis/ERC20.json";

/**
 * Setup balanceOf method
 *
 * @param web3 Web3 instance
 * @return Method to calculate the balance of a token
 */
const balanceOf =
  (web3: Web3) => async (tokenAddress: string, walletAddress: string) => {
    const contract = new web3.eth.Contract(ERC20 as any, tokenAddress);
    const result = await contract.methods.balanceOf(walletAddress).call();
    return result;
  };

export default balanceOf;

