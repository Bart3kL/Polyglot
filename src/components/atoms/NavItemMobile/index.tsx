import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import MobileNavSubItem from "../NavSubItemMobile";
import { NavItemMobileProps } from "../../../types/Layout/NavItemMobile";
import useGetUsers from "@/src/components/lib/axios/useGetUsers";
import { User } from "@/src/types/Layout/NavItemMobile/utilityTypes";
import usePostProgress from "@/src/components/lib/axios/usePostProgress";

import styles from "./rwd.module.scss";
const { wrapperItem, wrapperOverlay, wrapperSubmenu } = styles;

const NavItemMobile = ({ href, name, subMenu, index }: NavItemMobileProps) => {
  const { data }: any = useSession();
  const fetchLessonStep = usePostProgress();
  const currentRoute = useRouter().pathname;

  const handleUserProgress = async () => {
    const users = await useGetUsers("check-user");
    const foundAccount = users.some((user: User) => user.id === data.user.id);

    if (!foundAccount) {
      fetchLessonStep("1", "1");
    }
  };
  return (
    <>
      <li
        onClick={index === 2 ? handleUserProgress : undefined}
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
