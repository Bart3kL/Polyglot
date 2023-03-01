import React from "react";
import Joyride from "react-joyride";

import useJoyride from "../../lib/react-joyride";
import RepetitionsDefaultButtons from "../../atoms/RepetitionsDefaultButtons";
import RepetitionsCheckButton from "../../atoms/RepetitionsCheckButton";
import useRepeats from "../../lib/hooks/useRepeats";
import { RepetitionsContentProps } from "@/src/types/Repetitions/RepetitionsContent";
import { Icons } from "../../shared";

import styles from "./rwd.module.scss";
const {
  wrapperWordToTranslate,
  wrapperMessage,
  wrapperButtons,
  wrapperTitle,
  wrapperTutorial,
} = styles;

const RepetitionsContent = ({ repetitions, page }: RepetitionsContentProps) => {
  const {
    handleResult,
    handleCheckResult,
    handleAddLetter,
    handleChange,
    manageRepeats,
  } = useRepeats(repetitions);

  const {
    headerTitle,
    translatePleaceholder,
    hintAnswerBtn,
    checkAnswerBtn,
    thatsAll,
    checksButtonsList,
    tutorialStepsChecksButtons,
  } = page;

  const {
    run,
    handleJoyrideCallback,
    stepIndex,
    steps,
    handleResetTutorial,
    isUserFirstTime,
  } = useJoyride(tutorialStepsChecksButtons, "tutorialRepetitionsChecksPage");

  return (
    <>
      {isUserFirstTime === null && manageRepeats.success && (
        <Joyride
          callback={handleJoyrideCallback}
          continuous
          run={run}
          scrollToFirstStep
          showProgress
          showSkipButton
          stepIndex={stepIndex}
          steps={steps}
          styles={{
            overlay: {
              backgroundColor: "none",
              mixBlendMode: "unset",
            },
            spotlight: {
              backgroundColor: "transparent",
              borderRadius: 0,
              boxShadow: "0px 0px 0px 9999px rgba(0,0,0,0.6)",
            },
          }}
        />
      )}
      <h3 className={wrapperTitle}>
        {headerTitle}
        <span id="amount">
          {repetitions !== undefined ? manageRepeats.repetitionsLength : ""}
        </span>
      </h3>
      {manageRepeats.repetitionsLength === 0 ? (
        <div className={wrapperWordToTranslate}>{thatsAll}</div>
      ) : (
        <div className={wrapperWordToTranslate}>
          {repetitions[manageRepeats.index]?.translation}
        </div>
      )}

      {manageRepeats.success && (
        <div className={wrapperMessage}>
          {repetitions[manageRepeats.index].name}
        </div>
      )}
      <textarea
        placeholder={translatePleaceholder}
        value={manageRepeats.value}
        onChange={(e: any) => handleChange(e)}
        disabled={
          manageRepeats.success || manageRepeats.repetitionsLength === 0
            ? true
            : false
        }
      />
      {!manageRepeats.success ? (
        <div className={wrapperButtons}>
          <RepetitionsDefaultButtons
            checkAnswerBtn={checkAnswerBtn}
            hintAnswerBtn={hintAnswerBtn}
            handleAddLetter={handleAddLetter}
            handleCheckResult={handleCheckResult}
            value={manageRepeats.value}
            repetitionsLength={manageRepeats.repetitionsLength}
          />
        </div>
      ) : (
        <div className={wrapperButtons}>
          {checksButtonsList.map((button, i) => (
            <RepetitionsCheckButton
              handleResult={handleResult}
              {...button}
              index={i}
              key={button.name}
            />
          ))}
        </div>
      )}
      <div
        className={wrapperTutorial}
        id="tutorial"
        onClick={() => handleResetTutorial()}
      >
        <Icons.BsQuestionLg />
      </div>
    </>
  );
};

export default RepetitionsContent;
