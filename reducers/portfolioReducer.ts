import { portfolioInitialState } from "context/portfolioContext/initialValue";
import { PortfolioState } from "typings/portfolioState";


export type Action = { type: "reset portfolio state" };

const PortfolioReducer = (
  statePortfolio: PortfolioState,
  action: Action,
): PortfolioState => {
  switch (action.type) {
    case "reset portfolio state": {
      return { ...portfolioInitialState };
    }

    default:
      return portfolioInitialState;
  }
};

export default PortfolioReducer;
