import { CustomProvider } from "typings/CustomProvider";
/**
 * Request to change the provider network
 *
 * @param provider Injected Provider
 * @return void
 */
const switchChain = (provider: CustomProvider) => async (chainId: string) => {
  await provider?.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId }],
  });
};

export default switchChain;
