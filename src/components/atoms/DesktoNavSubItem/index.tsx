import React from "react";
import Link from "next/link";

import { DesktoNavSubItemProps } from "@/src/types/Layout/DesktoNavSubItem";

import styles from "./rwd.module.scss";
const { wrapperItem, wrapperItemLink } = styles;

const DesktoNavSubItem = ({
  href,
  name,
  description,
}: DesktoNavSubItemProps) => {
  return (
    <li className={wrapperItem} key={name}>
      <Link href={href} className={wrapperItemLink}>
        {name}
      </Link>
      <p>{description}</p>
    </li>
  );
};

export default DesktoNavSubItem;
