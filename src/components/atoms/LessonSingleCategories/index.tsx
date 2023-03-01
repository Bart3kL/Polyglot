import React from "react";

import LessonSingleCategoryCard from "../LessonSingleCategoryCard";
import { LessonSingleCategoriesProps } from "@/src/types/LessonSingle/LessonSingleCategories";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const LessonSingleCategories = ({
  userProgress,
  id,
}: LessonSingleCategoriesProps) => {
  return (
    <div className={wrapper}>
      {userProgress.lessonStep >= "1" && userProgress.lesson >= id ? (
        <LessonSingleCategoryCard
          type="Słownictwo"
          lessonNumber="1"
          href="slownictwo"
          id={id}
          disabled={false}
        />
      ) : (
        <LessonSingleCategoryCard
          type="Słownictwo"
          lessonNumber="1"
          id={id}
          disabled={true}
        />
      )}
      {userProgress.lessonStep >= "2" || userProgress.lesson > id ? (
        <LessonSingleCategoryCard
          type="Gramatyka"
          lessonNumber="2"
          href="gramatyka"
          id={id}
          disabled={false}
        />
      ) : (
        <LessonSingleCategoryCard
          type="Gramatyka"
          lessonNumber="2"
          disabled={true}
          id={id}
        />
      )}
      {userProgress.lessonStep === "3" || userProgress.lesson > id ? (
        <LessonSingleCategoryCard
          type="Ćwiczenia"
          lessonNumber="3"
          href="cwiczenia"
          id={id}
          disabled={false}
        />
      ) : (
        <LessonSingleCategoryCard
          type="Ćwiczenia"
          lessonNumber="3"
          disabled={true}
          id={id}
        />
      )}
    </div>
  );
};

export default LessonSingleCategories;
