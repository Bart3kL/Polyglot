import React from "react";

import { ExerciseOptionsProps } from "@/src/types/Exercises/ExerciseOptions";

import styles from "./rwd.module.scss";
const { wrapper, wrapperOption } = styles;

const ExerciseOptions = ({
  manageExercise,
  handleAnswer,
  exercises,
}: ExerciseOptionsProps) => {
  const options = [
    exercises[manageExercise.index].option1,
    exercises[manageExercise.index].option2,
    exercises[manageExercise.index].option3,
  ];
  return (
    <div className={wrapper}>
      {options.map((option) => (
        <div className={wrapperOption} key={option}>
          <input
            type="checkbox"
            checked={manageExercise.answer !== option ? false : true}
            onChange={() => handleAnswer(option)}
          />
          <p>{option}</p>
        </div>
      ))}
    </div>
  );
};

export default ExerciseOptions;
