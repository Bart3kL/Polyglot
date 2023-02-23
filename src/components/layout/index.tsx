import React from "react";
import { ReactNode, FC } from "react";

import Navbar from "./NavBar";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

type Props = { children: ReactNode };

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={wrapper}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
