import { createContext, useContext } from "react";
import { PortfolioState } from "typings/challengeState";


const PortfolioContext = createContext<
  | {
      portolioState: PortfolioState;
    }
  | undefined
>(undefined);

export default PortfolioContext;

export const usePortfolioState = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("Error on 'portfolio context'");
  }
  return context;
};





