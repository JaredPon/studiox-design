import { Header } from "../Header";
import { Footer } from "../Footer";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Page: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};
