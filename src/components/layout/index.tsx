import React from "react";
import { ReactNode, FC } from "react";
import { Overpass } from "@next/font/google";
import { useRouter } from "next/router";
type Props = { children: ReactNode };

import { cx } from "../lib/utils";
import Navigation from "./NavBar/Navigation";
import NavigationMobile from "./NavBar/NavigationMobile";

import styles from "./rwd.module.scss";
const { wrapperHome, wrapperOther } = styles;

const overpass = Overpass({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {router.pathname === "/" ? (
        <div className={cx(wrapperHome, overpass.className)}>
          <Navigation />
          <NavigationMobile />
          {children}
        </div>
      ) : (
        <div className={cx(wrapperOther, overpass.className)}>
          <Navigation backgroundColor={true} />
          <NavigationMobile />
          {children}
        </div>
      )}
    </>
  );
};

export default Layout;
