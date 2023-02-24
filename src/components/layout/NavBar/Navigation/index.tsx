import React from "react";
import Link from "next/link";

import { navigationList } from "./utils";
import DesktopNavItem from "@/src/components/atoms/DesktopNavItem";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLogo, wrapperList } = styles;

const Navigation = () => {
  return (
    <nav className={wrapper}>
      <div className={wrapperLogo}>
        <Link href="/">Polyglot</Link>
      </div>
      <ul className={wrapperList}>
        {navigationList.map((navItem) => (
          <DesktopNavItem {...navItem} key={navItem.href} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
