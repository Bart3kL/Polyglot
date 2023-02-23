import React, { useState } from "react";
import Link from "next/link";

import { DM_Serif_Display } from "@next/font/google";
import { cx } from "@/src/components/lib/utils";
import { Icons } from "@/src/components/shared";
import MobileNavItem from "@/src/components/atoms/MobileNavItem";

import { navigationList } from "./utils";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin-ext"],
});

import styles from "./rwd.module.scss";
const {
  wrapper,
  wrapperNav,
  wrapperNavLogo,
  wrapperNavIcon,
  wrapperNavIconActive,
  wrapperList,
} = styles;

const NavigationMobile = () => {
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  };

  return (
    <nav className={wrapper}>
      <div className={wrapperNav}>
        <div className={wrapperNavLogo}>
          <Link href="/" className={dmSerifDisplay.className}>
            Polyglot
          </Link>
        </div>
        <div className={cx(wrapperNavIcon, show && wrapperNavIconActive)}>
          {show ? (
            <Icons.AiOutlineClose onClick={showMenu} />
          ) : (
            <Icons.FaBars onClick={showMenu} />
          )}
        </div>
      </div>
      <ul
        className={cx(wrapperList)}
        style={{ display: show ? "flex" : "none" }}
      >
        {navigationList.map((navItem) => (
          <MobileNavItem {...navItem} key={navItem.href} />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMobile;
