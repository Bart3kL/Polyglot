import React from "react";

import GrammarLesson from "../../atoms/GrammarLesson";
import { GrammarPageProps } from "@/src/types/Grammar/GrammarPage";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle, wrapperContent } = styles;

const GrammarPage = ({ grammar, page }: GrammarPageProps) => {
  console.log(grammar, page);
  const { headerTitle, nextStep, lessonType } = page;
  return (
    <section className={wrapper}>
      <h1 className={wrapperTitle}>
        {headerTitle} {grammar[0].grammarForLessonId} -<span>{lessonType}</span>
      </h1>
      <div className={wrapperContent}>
        <GrammarLesson {...grammar[0]} nextStep={nextStep} />
      </div>
    </section>
  );
};

export default GrammarPage;
