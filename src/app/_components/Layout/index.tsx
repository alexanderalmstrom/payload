import { Header } from "@/components/Header";
import { MainMenu } from "@/payload-types";
import { Fragment, ReactNode } from "react";

export const Layout = ({
  children,
  mainMenu,
}: {
  children: ReactNode;
  mainMenu: MainMenu;
}) => {
  return (
    <Fragment>
      <Header mainMenu={mainMenu} />
      {children}
    </Fragment>
  );
};
