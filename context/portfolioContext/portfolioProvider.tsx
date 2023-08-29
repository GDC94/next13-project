import React, { useMemo, useReducer } from "react";
import { portfolioInitialState } from "./initialValue";
import PortfolioContext from "./portfolioContext";
import PortfolioReducer from "reducers/portfolioReducer";

type UserProviderProps = {
  children: React.ReactNode;
};

const PortfolioProvider = ({ children }: UserProviderProps) => {
  const [statePortfolio] = useReducer(PortfolioReducer, portfolioInitialState);
  /* const { userKey } = useGetUserKey(); */

  /*El propósito principal de useMemo es optimizar el rendimiento evitando cálculos 
  costosos o repetitivos durante las re-renderizaciones innecesarias de un componente.*/
  const contextState = useMemo(() => {
    const userData = {
      portolioState: {
        ...statePortfolio,
        userKey: "la user key",
      },
    };
    return userData;
  }, [statePortfolio]);

  return (
    <PortfolioContext.Provider value={contextState}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
