import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Page: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Navigation></Navigation>
      {children}
      <Footer></Footer>
    </>
  );
};
