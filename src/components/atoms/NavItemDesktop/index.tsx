import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import DesktoNavSubItem from "../NavSubItemDesktop";
import { NavItemDesktopProps } from "../../../types/Layout/NavItemDesktop";
import useGet from "@/src/components/lib/axios/useGet";
import { User } from "@/src/types/Layout/NavItemMobile/utilityTypes";
import usePostProgress from "@/src/components/lib/axios/usePostProgress";
import styles from "./rwd.module.scss";
const { wrapperItem, wrapperItemLink, wrapperBox, wrapperBoxSubmenu } = styles;

const NavItemDesktop = ({
  href,
  name,
  subMenu,
  index,
}: NavItemDesktopProps) => {
  const { data: session } = useSession();
  const currentRoute = useRouter().pathname;
  const isUserLogged = subMenu && session;

  const fetchLessonStep = usePostProgress();

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
          backgroundColor: currentRoute === href ? "#374151" : "initial",
        }}
      >
        <Link href={href} className={wrapperItemLink}>
          {name}
        </Link>
      </li>
    </>
  );
};

export default NavItemDesktop;
