import React from "react";

import ScienceSingleLessonBar from "../../atoms/ScienceSingleLessonBar";
import { ScienceProgressBarProps } from "@/src/types/Science/ScienceProgressBar";

import styles from "./rwd.module.scss";
const { wrapper, wrapperContent } = styles;

const ScienceProgressBar = ({
  yourProgress,
  userProgress,
  lessons,
}: ScienceProgressBarProps) => {
  return (
    <div className={wrapper} id="progressBar">
      <h3>{yourProgress}</h3>
      <p>
        {Math.floor((Number(userProgress?.lesson) / lessons.length) * 100)}
        /100%
      </p>
      <div className={wrapperContent}>
        {lessons.map((lesson) => (
          <ScienceSingleLessonBar
            id={lesson.id}
            key={lesson.title}
            userProgress={userProgress}
          />
        ))}
      </div>
    </div>
  );
};

export default ScienceProgressBar;
