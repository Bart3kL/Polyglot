import React from "react";
import Link from "next/link";

import { NavSubItemDesktopProps } from "../../../types/Layout/NavSubItemDesktop";

import styles from "./rwd.module.scss";
const { wrapperItem, wrapperItemLink } = styles;

const NavSubItemDesktop = ({
  href,
  name,
  description,
}: NavSubItemDesktopProps) => {
  return (
    <li className={wrapperItem} key={name}>
      <Link href={href} className={wrapperItemLink}>
        {name}
      </Link>
      <p>{description}</p>
    </li>
  );
};

export default NavSubItemDesktop;
