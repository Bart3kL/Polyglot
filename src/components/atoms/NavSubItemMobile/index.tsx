import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { NavSubItemMobileProps } from "../../../types/Layout/NavSubItemMobile";

import styles from "./rwd.module.scss";
const { wrapperItem } = styles;

const NavSubItemMobile = ({ href, name }: NavSubItemMobileProps) => {
  const { data: session } = useSession();

  return (
    <li
      className={wrapperItem}
      key={name}
      style={{ filter: session ? "" : "blur(2px)" }}
    >
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default NavSubItemMobile;
