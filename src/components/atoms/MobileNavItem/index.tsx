import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import MobileNavSubItem from "../MobileNavSubItem";
import { MobileNavItemProps } from "@/src/types/Layout/MobileNavItem";

import styles from "./rwd.module.scss";
const { wrapperItem, wrapperOverlay, wrapperSubmenu } = styles;

const MobileNavItem = ({ href, name, subMenu }: MobileNavItemProps) => {
  const currentRoute = useRouter().pathname;
  return (
    <>
      <li
        className={wrapperItem}
        style={{
          backgroundColor: currentRoute === href ? "#111827" : "",
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

export default MobileNavItem;
