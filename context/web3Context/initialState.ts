import { CustomProvider } from "typings/CustomProvider";
import Web3 from "web3";


interface ProviderInitialState {
  provider: CustomProvider | null;
  web3: Web3 | null;
  isLoading: boolean;
}

const initialState: ProviderInitialState = {
  provider: null,
  web3: null,
  isLoading: true,
};

export default initialState;


