import React, { useState } from "react";
import Link from "next/link";

import { cx } from "@/src/components/lib/utils";
import { Icons } from "@/src/components/shared";
import MobileNavItem from "@/src/components/atoms/NavItemMobile";

import { navigationList } from "./utils";

import styles from "./rwd.module.scss";
const {
  wrapper,
  wrapperNav,
  wrapperNavLogo,
  wrapperNavIcon,
  wrapperNavIconActive,
  wrapperList,
  wrapperActive,
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
          <Link href="/">Polyglot</Link>
        </div>
        <div className={cx(wrapperNavIcon, show && wrapperNavIconActive)}>
          {show ? (
            <Icons.AiOutlineClose onClick={showMenu} />
          ) : (
            <Icons.FaBars onClick={showMenu} />
          )}
        </div>
      </div>
      <ul className={cx(wrapperList, show && wrapperActive)}>
        {navigationList.map((navItem) => (
          <MobileNavItem {...navItem} key={navItem.href} />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMobile;
