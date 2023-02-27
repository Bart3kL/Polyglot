import React from "react";

// import useGetUserProgress from "../../../lib/axios/useGetUserProgress";
import ScienceWelcomeBox from "../../atoms/ScienceWelcomeBox";
import SciencePageNextLessons from "../../atoms/SciencePageNextLessons";
import { SciencePageProps } from "@/src/types/Science/SciencePage";
// import ScienceSingleLessonBar from "../../atoms/ScienceSingleLessonBar";
// import { SciencePageContentProps } from "../../types/SciencePage/SciencePageContent";

import styles from "./rwd.module.scss";
const {
  wrapper,
  wrapperProgressBarWrapper,
  wrapperProgressBarWrapperContent,
  wrapperBox,
} = styles;

const SciencePage = ({ lessons, page, userProgress }: SciencePageProps) => {
  const { welcomeMessage, nextLessons, yourProgress } = page;

  const threeNextLessons = lessons
    ?.slice(Number(userProgress?.lesson) - 1, lessons.length)
    .slice(0, 3);

  console.log(lessons, page, userProgress);
  return (
    <section className={wrapper}>
      <div className={wrapperBox}>
        <ScienceWelcomeBox welcomeMessage={welcomeMessage} />
        <SciencePageNextLessons
          nextLessons={nextLessons}
          threeNextLessons={threeNextLessons}
        />
      </div>
      {/*  <div className={wrapperProgressBarWrapper}>
        <h3>Twój potęp</h3>
        <p>
          {Math.floor(
            (fetchLessonStep?.userProgress?.lesson / data.length) * 100
          )}
          /100%
        </p>
        <div className={wrapperProgressBarWrapperContent}>
          {data.map((lesson) => (
            <ScienceSingleLessonBar id={lesson.id} key={lesson.title} />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default SciencePage;
