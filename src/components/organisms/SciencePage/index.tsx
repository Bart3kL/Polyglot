import React from "react";

import ScienceWelcomeBox from "../../atoms/ScienceWelcomeBox";
import SciencePageNextLessons from "../../atoms/SciencePageNextLessons";
import { SciencePageProps } from "@/src/types/Science/SciencePage";
import ScienceProgressBar from "../../molecules/ScienceProgressBar";

import styles from "./rwd.module.scss";
const { wrapper, wrapperBox } = styles;

const SciencePage = ({ lessons, page, userProgress }: SciencePageProps) => {
  const { welcomeMessage, nextLessons, yourProgress } = page;

  const threeNextLessons = lessons
    ?.slice(Number(userProgress?.lesson) - 1, lessons.length)
    .slice(0, 3);

  return (
    <section className={wrapper}>
      <div className={wrapperBox}>
        <ScienceWelcomeBox welcomeMessage={welcomeMessage} />
        <SciencePageNextLessons
          nextLessons={nextLessons}
          threeNextLessons={threeNextLessons}
        />
      </div>
      <ScienceProgressBar
        lessons={lessons}
        userProgress={userProgress}
        yourProgress={yourProgress}
      />
    </section>
  );
};

export default SciencePage;
