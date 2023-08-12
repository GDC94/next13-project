import React from "react";

export interface MainLayoutProps {
  children?: React.ReactNode;
  full?: boolean;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <section>{children}</section>;
};
