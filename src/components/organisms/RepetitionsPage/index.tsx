import React from "react";
import Joyride from "react-joyride";
import useJoyride from "../../lib/react-joyride";

import { Icons } from "../../shared";
import RepetitionsContent from "../../molecules/RepetitionsContent";
import { RepetitionsPageProps } from "@/src/types/Repetitions/RepetitionsPage";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTutorial } = styles;

const RepetitionsPage = ({ repetitions, page }: RepetitionsPageProps) => {
  const { tutorialSteps } = page;
  const {
    run,
    handleJoyrideCallback,
    stepIndex,
    steps,
    handleResetTutorial,
    isUserFirstTime,
  } = useJoyride(tutorialSteps, "tutorialRepetitionsPage");

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
      <RepetitionsContent repetitions={repetitions} page={page} />
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

export default RepetitionsPage;
