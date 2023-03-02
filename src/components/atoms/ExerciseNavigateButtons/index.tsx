import React from "react";

import { ExerciseNavigateButtonsProps } from "@/src/types/ExerciseNavigateButtons";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const ExerciseNavigateButtons = ({
  nextWord,
  hideCheckBtn,
  handleCheckAnswer,
  handleNextQuestion,
  checkButtonLabel,
  nextButtonLabel,
}: ExerciseNavigateButtonsProps) => {
  return (
    <div className={wrapper}>
      <button
        onClick={handleCheckAnswer}
        style={{
          display: hideCheckBtn,
        }}
      >
        {checkButtonLabel}
      </button>
      {nextWord && (
        <button onClick={handleNextQuestion}>{nextButtonLabel}</button>
      )}
    </div>
  );
};

export default ExerciseNavigateButtons;
