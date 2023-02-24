import React from "react";
import { ReactNode, FC } from "react";
import { Overpass } from "@next/font/google";

import Navbar from "./NavBar";
import { cx } from "../lib/utils";
type Props = { children: ReactNode };

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const overpass = Overpass({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={cx(wrapper, overpass.className)}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
