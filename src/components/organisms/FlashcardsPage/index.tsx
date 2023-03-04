import React from "react";
import Joyride from "react-joyride";

import FlashCardsPageInitialContent from "../../molecules/FlashCardsPageInitialContent";
import FlashCardsCard from "../../molecules/FlashCardsPageCard";
import useManageStep from "../../lib/hooks/useManageStep";
import { Icons } from "../../shared";
import useJoyride from "../../lib/react-joyride";
import { FlashcardsPageProps } from "@/src/types/Flashcards/FlashcardsPage";

import styles from "./rwd.module.scss";
const {
  wrapper,
  wrapperTitle,
  wrapperEtaps,
  wrapperEtapsSingle,
  wrapperStepContent,
  wrapperTutorial,
} = styles;

const FlashcardsPage = ({ flashcards, page }: FlashcardsPageProps) => {
  console.log(flashcards);
  const { filteredData, showStepFlashcards, handleChangeStep } =
    useManageStep(flashcards);
  const { steps, title, tutorialSteps } = page;

  const {
    run,
    handleJoyrideCallback,
    stepIndex,
    steps: path,
    handleResetTutorial,
    isUserFirstTime,
  } = useJoyride(tutorialSteps, "tutorialFlashcardsPage");

  return (
    <div className={wrapper}>
      {isUserFirstTime === null && (
        <Joyride
          callback={handleJoyrideCallback}
          continuous
          run={run}
          scrollToFirstStep
          showProgress
          showSkipButton
          stepIndex={stepIndex}
          steps={path}
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
      <h1 id="flashcards" className={wrapperTitle}>
        {title}
      </h1>
      <ul className={wrapperEtaps}>
        {steps.map(({ name }, i) => (
          <li
            id={name.replace(" ", "")}
            className={wrapperEtapsSingle}
            key={name}
            onClick={() => handleChangeStep(i)}
          >
            {name}
          </li>
        ))}
      </ul>
      {showStepFlashcards.show && (
        <div className={wrapperStepContent}>
          <FlashCardsCard
            data={filteredData}
            showBtn={false}
            showToNextStepBtn={true}
            step={showStepFlashcards.index + 1}
            {...page}
          />
        </div>
      )}

      <FlashCardsPageInitialContent
        data={flashcards}
        page={page}
        show={!showStepFlashcards.show}
      />
      <div
        className={wrapperTutorial}
        id="tutorial"
        onClick={() => handleResetTutorial()}
      >
        <Icons.BsQuestionLg />
      </div>
    </div>
  );
};

export default FlashcardsPage;
