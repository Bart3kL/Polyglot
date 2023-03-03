import React from "react";
import Joyride from "react-joyride";

import useJoyride from "../../lib/react-joyride";
import { Icons } from "../../shared";
import NotesForm from "../../molecules/NotesForm";
import NotesContent from "../../molecules/NotesContent";
import { NotesPageProps } from "@/src/types/Notes/NotesPage";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTutorial } = styles;

const NotesPage = ({ notes, page }: NotesPageProps) => {
  const { tutorialSteps } = page;
  const {
    run,
    handleJoyrideCallback,
    stepIndex,
    steps,
    handleResetTutorial,
    isUserFirstTime,
  } = useJoyride(tutorialSteps, "tutorialNotesPage");
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
      <NotesForm {...page} />
      <NotesContent notes={notes} />
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

export default NotesPage;
