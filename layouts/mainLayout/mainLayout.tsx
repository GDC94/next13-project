import React from "react";
import { Global as GlobalStyling } from "@emotion/react";

import {
  LayoutContainer,
  LayoutWrapper,
  GlobalStyles,
} from "./mainLayout.styles";

export interface MainLayoutProps {
  children?: React.ReactNode;
  full?: boolean;
}

export const MainLayout = ({ children, full }: MainLayoutProps) => {
  return (
    <LayoutContainer>
      <GlobalStyling styles={GlobalStyles} />
      <LayoutWrapper>
        {children}
        {!full && <>hola</>}
      </LayoutWrapper>
    </LayoutContainer>
  );
};
