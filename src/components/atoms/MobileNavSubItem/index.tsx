import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { MobileNavSubItemProps } from "@/src/types/Layout/MobileNavSubItem";

import styles from "./rwd.module.scss";
const { wrapperItem } = styles;

const MobileNavSubItem = ({ href, name }: MobileNavSubItemProps) => {
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

export default MobileNavSubItem;
