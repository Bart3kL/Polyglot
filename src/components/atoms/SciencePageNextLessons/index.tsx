import React from "react";

import ScienceSingleNextLesson from "../../atoms/ScienceSingleNextLesson";
import { SciencePageNextLessonsProps } from "@/src/types/Science/SciencePageNextLessons";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLessons } = styles;

const SciencePageNextLessons = ({
  nextLessons,
  threeNextLessons,
}: SciencePageNextLessonsProps) => {
  return (
    <div className={wrapper}>
      <h2>{nextLessons}</h2>
      <div className={wrapperLessons} id="nextLessons">
        {threeNextLessons?.map((lesson) => (
          <ScienceSingleNextLesson {...lesson} key={lesson.title} />
        ))}
      </div>
    </div>
  );
};

export default SciencePageNextLessons;
