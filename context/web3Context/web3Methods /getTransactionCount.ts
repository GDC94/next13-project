import Web3 from "web3";

const getTransactionCount = (web3: Web3) => async (accountAddres: string) => {
  const nonce = await web3?.eth?.getTransactionCount(accountAddres, "latest");
  return nonce;
};

export default getTransactionCount;
