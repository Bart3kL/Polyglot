import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { scienceLeftNavPanels } from "./untils";

import styles from "./rwd.module.scss";
const { wrapper, wrapperList, wrapperListItem } = styles;

const NavigationLeft = () => {
  const currentRoute = useRouter().pathname;
  return (
    <nav className={wrapper}>
      <ul className={wrapperList}>
        {scienceLeftNavPanels.map(({ name, href, icon }) => (
          <li
            key={name}
            style={{
              backgroundColor: currentRoute === href ? "#374151" : "initial",
            }}
          >
            <Link href={href}>
              <div className={wrapperListItem}>
                <span>{React.createElement(icon)}</span>
                <p>{name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationLeft;
