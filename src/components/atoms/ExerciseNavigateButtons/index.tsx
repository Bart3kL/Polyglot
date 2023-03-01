import React from "react";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const ExerciseNavigateButtons = ({
  nextWord,
  hideCheckBtn,
  handleCheckAnswer,
  handleNextQuestion,
  checkButtonLabel,
  nextButtonLabel,
}: any) => {
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
