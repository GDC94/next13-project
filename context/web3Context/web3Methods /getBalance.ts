import Web3 from "web3";

/**
 * Setup getBalance method
 *
 * @param web3 Web3 instance
 * @return web3.eth.getBalance
 */
const getBalance = (web3: Web3) => (address: string) =>
  web3?.eth.getBalance(address);

export default getBalance;
