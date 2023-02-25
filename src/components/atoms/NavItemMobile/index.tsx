import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import MobileNavSubItem from "../NavSubItemMobile";
import { NavItemMobileProps } from "../../../types/Layout/NavItemMobile";

import styles from "./rwd.module.scss";
const { wrapperItem, wrapperOverlay, wrapperSubmenu } = styles;

const NavItemMobile = ({ href, name, subMenu }: NavItemMobileProps) => {
  const currentRoute = useRouter().pathname;
  return (
    <>
      <li
        className={wrapperItem}
        style={{
          backgroundColor: currentRoute === href ? "#111827" : "initial",
        }}
      >
        <Link href={href}>{name}</Link>
      </li>
      {subMenu && (
        <>
          <div className={wrapperOverlay}>
            Musisz być zalogowany aby korzystać z tych stron
          </div>
          <ul className={wrapperSubmenu}>
            {subMenu.map((subItem) => (
              <MobileNavSubItem {...subItem} key={subItem.href} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default NavItemMobile;
