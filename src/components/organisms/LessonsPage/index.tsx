import React from "react";

import LessonCard from "../../atoms/LessonCard";
import { LessonsPageProps } from "@/src/types/Lessons/LessonsPage";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTItle, wrapperLessons } = styles;

const LessonsPage = ({ page, lessons, userProgress }: LessonsPageProps) => {
  const { headerTitle } = page;

  return (
    <section className={wrapper}>
      <h1 className={wrapperTItle}>{headerTitle}</h1>
      <div className={wrapperLessons}>
        {lessons.map((lesson) => (
          <LessonCard
            {...lesson}
            key={lesson.id}
            currentLesson={userProgress?.lesson}
          />
        ))}
      </div>
    </section>
  );
};

export default LessonsPage;
