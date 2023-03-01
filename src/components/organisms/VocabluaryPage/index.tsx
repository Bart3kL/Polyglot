import React from "react";

import VocabluaryContent from "../../molecules/VocabluaryContent";
import { VocabluaryPageProps } from "@/src/types/Vocabluary/VocabluaryPage";
import useJoyride from "../../lib/react-joyride";
import { Icons } from "../../shared";
import Joyride from "react-joyride";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle, wrapperContent, wrapperTutorial } = styles;

const VocabluaryPage = ({ vocabluary, page }: VocabluaryPageProps) => {
  const {
    headerTitle,
    nextStep,
    toNextWordLabel,
    toStudyLabel,
    tutorialSteps,
  } = page;

  const {
    run,
    handleJoyrideCallback,
    stepIndex,
    steps,
    handleResetTutorial,
    isUserFirstTime,
  } = useJoyride(tutorialSteps, "tutorialVocabluaryPage");

  return (
    <section className={wrapper}>
      {isUserFirstTime === null && (
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
      <h1 className={wrapperTitle}>{headerTitle}</h1>
      <div className={wrapperContent}>
        <VocabluaryContent
          vocabluary={vocabluary}
          nextStep={nextStep}
          toNextWordLabel={toNextWordLabel}
          toStudyLabel={toStudyLabel}
        />
      </div>
      <div
        className={wrapperTutorial}
        id="tutorial"
        onClick={() => handleResetTutorial()}
      >
        <Icons.BsQuestionLg />
      </div>
    </section>
  );
};

export default VocabluaryPage;
