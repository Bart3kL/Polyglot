import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import DesktoNavSubItem from "../NavSubItemDesktop";
import { NavItemDesktopProps } from "../../../types/Layout/NavItemDesktop";
import useGetUsers from "@/src/components/lib/axios/useGetUsers";
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
  const { data: session }: any = useSession();
  const currentRoute = useRouter().pathname;
  const isUserLogged = subMenu && session;

  const fetchLessonStep = usePostProgress();

  const handleUserProgress = async () => {
    const users = await useGetUsers("check-user");
    const foundAccount = users.some(
      (user: User) => user.id === session.user.id
    );

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
          backgroundColor: currentRoute === href ? "#374151" : "initial",
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

export default NavItemDesktop;
