import { portfolioInitialState } from "context/initialValue";
import { PortfolioState } from "typings/challengeState";

export type Action = { type: "reset portfolio state" };

const PortfolioReducer = (
  stateChallenge: PortfolioState,
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
