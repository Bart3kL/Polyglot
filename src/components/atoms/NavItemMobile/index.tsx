import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import MobileNavSubItem from "../NavSubItemMobile";
import { NavItemMobileProps } from "../../../types/Layout/NavItemMobile";
import useGet from "@/src/components/lib/axios/useGet";
import { User } from "@/src/types/Layout/NavItemMobile/utilityTypes";
import usePostProgress from "@/src/components/lib/axios/usePostProgress";

import styles from "./rwd.module.scss";
const { wrapperItem, wrapperOverlay, wrapperSubmenu } = styles;

const NavItemMobile = ({ href, name, subMenu, index }: NavItemMobileProps) => {
  const { data: session }: any = useSession();
  const fetchLessonStep = usePostProgress();
  const currentRoute = useRouter().pathname;

  const handleUserProgress = async () => {
    if (session) {
      const users = await useGet("check-user");
      const foundAccount = users.some(
        (user: User) => user.id === session.user.id
      );

      if (!foundAccount) {
        fetchLessonStep("1", "1");
      }
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
          {!session?.user.id && (
            <div className={wrapperOverlay}>
              Musisz być zalogowany aby korzystać z tych stron
            </div>
          )}
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
