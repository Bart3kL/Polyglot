import React from "react";
import Link from "next/link";

import useExercises from "../../lib/hooks/useExercises";
import ExerciseOptions from "../../atoms/ExerciseOptions";
import ExerciseNavigateButtons from "../../atoms/ExerciseNavigateButtons";
import usePostProgress from "../../lib/axios/usePostProgress";
import { ExercisePageContent } from "@/src/types/Exercises/ExercisePageContent";

import styles from "./rwd.module.scss";
const { wrapper, wrapperButton, wrapperExercise, wrapperExerciseMessage } =
  styles;

const ExercisePageContent = ({
  exercises,
  nextStep,
  checkButtonLabel,
  nextButtonLabel,
  wrongAnswer,
  correctAnswer,
}: ExercisePageContent) => {
  const lessonStep = usePostProgress();
  const {
    manageExercise,
    handleAnswer,
    handleNextQuestion,
    handleCheckAnswer,
  } = useExercises();

  const isCorrectAnswer =
    manageExercise.index === exercises.length
      ? manageExercise.answer ===
        exercises[manageExercise.index - 1].correctAnswer
      : manageExercise.answer === exercises[manageExercise.index].correctAnswer;

  return (
    <div className={wrapper}>
      {manageExercise.index === exercises.length ? (
        <div
          className={wrapperButton}
          onClick={() =>
            lessonStep(`${parseInt(exercises[0].exerciseForLessonId) + 1}`, "1")
          }
        >
          <Link href={`/nauka/lekcje`}>{nextStep}</Link>
        </div>
      ) : (
        <div className={wrapperExercise}>
          <h2>{exercises[manageExercise.index].question}</h2>
          <ExerciseOptions
            manageExercise={manageExercise}
            handleAnswer={handleAnswer}
            exercises={exercises}
          />
          <div className={wrapperExerciseMessage}>
            {manageExercise.toggle
              ? isCorrectAnswer
                ? correctAnswer
                : wrongAnswer
              : ""}
          </div>
          <ExerciseNavigateButtons
            checkButtonLabel={checkButtonLabel}
            nextButtonLabel={nextButtonLabel}
            nextWord={manageExercise.toggle && isCorrectAnswer}
            hideCheckBtn={
              isCorrectAnswer && manageExercise.toggle ? "none" : undefined
            }
            handleNextQuestion={handleNextQuestion}
            handleCheckAnswer={handleCheckAnswer}
          />
          <p>{`${manageExercise.index + 1}/${exercises.length + 1}`}</p>
        </div>
      )}
    </div>
  );
};

export default ExercisePageContent;
