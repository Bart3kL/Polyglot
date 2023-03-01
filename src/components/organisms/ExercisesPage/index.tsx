import React from "react";

import ExercisePageContent from "../../molecules/ExercisePageContent";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle } = styles;

const ExercisesPage = ({ exercises, page }: any) => {
  const {
    headerTitle,
    lessonType,
    nextStep,
    checkButtonLabel,
    wrongAnswer,
    correctAnswer,
    nextButtonLabel,
  } = page;
  return (
    <section className={wrapper}>
      <h1 className={wrapperTitle}>
        {headerTitle} -<span>{lessonType}</span>
      </h1>
      <ExercisePageContent
        exercises={exercises}
        nextStep={nextStep}
        checkButtonLabel={checkButtonLabel}
        wrongAnswer={wrongAnswer}
        correctAnswer={correctAnswer}
        nextButtonLabel={nextButtonLabel}
      />
    </section>
  );
};

export default ExercisesPage;
