import React, { useState, ReactNode, FC } from "react";
import { Overpass } from "@next/font/google";
type Props = { children: ReactNode };
import Router from "next/router";

import { Icons } from "../../shared";
import NavigationLeft from "../NavBar/NavigationLeft";
import { cx } from "../../lib/utils";

import styles from "./rwd.module.scss";
const {
  wrapperOther,
  wrapperOtherScience,
  wrapperOtherScienceNavDesktop,
  wrapperOtherScienceNavMobile,
  wrapperOtherScienceContent,
  wrapperOtherScienceNavMobileIcon,
  wrapperOtherTutorial,
} = styles;

const overpass = Overpass({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const SciencePageLayout: FC<Props> = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const handleResetTutorial = () => {
    window.localStorage.removeItem("tutorialSciencePage");
    Router.reload();
  };

  return (
    <>
      <div className={cx(wrapperOther, overpass.className)}>
        <div className={wrapperOtherScience}>
          <div className={wrapperOtherScienceNavMobile}>
            <div
              className={wrapperOtherScienceNavMobileIcon}
              style={toggle ? { backgroundColor: "#27293d" } : {}}
            >
              <Icons.BsNutFill
                onClick={() => setToggle(!toggle)}
                style={toggle ? { color: "white" } : {}}
              />
            </div>
            {toggle && <NavigationLeft />}
          </div>
          <div className={wrapperOtherScienceNavDesktop}>
            <NavigationLeft />
          </div>
          {!toggle && (
            <div className={wrapperOtherScienceContent}>{children}</div>
          )}
        </div>
        <div
          className={wrapperOtherTutorial}
          id="tutorial"
          onClick={() => handleResetTutorial()}
        >
          <Icons.BsQuestionLg />
        </div>
      </div>
    </>
  );
};

export default SciencePageLayout;
