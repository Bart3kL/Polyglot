import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();

  useEffect(() => {
    setShow(false);
  }, [router.pathname]);
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
        {navigationList.map((navItem, i) => (
          <MobileNavItem {...navItem} key={navItem.href} index={i} />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMobile;
