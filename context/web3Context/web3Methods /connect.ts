import { CustomProvider } from "typings/CustomProvider";

/**
 * Request to connect with the injected provider
 *
 * @param provider Injected Provider
 * @return Accounts array
 */
const connect = (provider: CustomProvider) => async () =>
  await provider?.request({
    method: "eth_requestAccounts",
  });

export default connect;
