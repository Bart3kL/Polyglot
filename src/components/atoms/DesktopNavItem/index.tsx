import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import DesktoNavSubItem from "../DesktoNavSubItem";

import { DesktopNavItemProps } from "@/src/types/Layout/DesktopNavItem";

import styles from "./rwd.module.scss";
const { wrapperItem, wrapperItemLink, wrapperBox, wrapperBoxSubmenu } = styles;

const DesktopNavItem = ({ href, name, subMenu }: DesktopNavItemProps) => {
  const { data: session } = useSession();
  const currentRoute = useRouter().pathname;
  const isUserLogged = subMenu && session;

  return (
    <>
      <li
        className={wrapperItem}
        style={{
          backgroundColor: currentRoute === href ? "#111827" : "initial",
        }}
      >
        {isUserLogged ? (
          <p className={wrapperItemLink}>{name}</p>
        ) : (
          <Link href={href} className={wrapperItemLink}>
            {name}
          </Link>
        )}
        {isUserLogged && (
          <div className={wrapperBox}>
            <ul className={wrapperBoxSubmenu}>
              {subMenu.map((subItem) => (
                <DesktoNavSubItem {...subItem} key={subItem.href} />
              ))}
            </ul>
          </div>
        )}
      </li>
    </>
  );
};

export default DesktopNavItem;
