import React from "react";
import Link from "next/link";

import { navigationList } from "./utils";
import DesktopNavItem from "@/src/components/atoms/NavItemDesktop";
import { NavigationProps } from "@/src/types/Layout/Navigation";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLogo, wrapperList } = styles;

const Navigation = ({ backgroundColor }: NavigationProps) => {
  return (
    <nav
      className={wrapper}
      style={{ backgroundColor: backgroundColor ? "rgb(31 41 55)" : "" }}
    >
      <div className={wrapperLogo}>
        <Link href="/">Polyglot</Link>
      </div>
      <ul className={wrapperList}>
        {navigationList.map((navItem, i) => (
          <DesktopNavItem {...navItem} key={navItem.href} index={i} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
