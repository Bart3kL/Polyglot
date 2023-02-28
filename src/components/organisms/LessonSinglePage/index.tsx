import React from "react";
import Image from "next/image";

import LessonSingleCategories from "../../atoms/LessonSingleCategories";
import { LessonSinglePageProps } from "@/src/types/LessonSingle/LessonSinglePage";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle, wrapperLesson, wrapperLessonImage } = styles;

const LessonSinglePage = ({
  lesson,
  userProgress,
  id,
}: LessonSinglePageProps) => {
  return (
    <section className={wrapper}>
      <h1 className={wrapperTitle}>{lesson?.title}</h1>
      <div className={wrapperLesson}>
        <div className={wrapperLessonImage}>
          <Image
            src={lesson.image}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <LessonSingleCategories userProgress={userProgress} id={id} />
      </div>
    </section>
  );
};

export default LessonSinglePage;
