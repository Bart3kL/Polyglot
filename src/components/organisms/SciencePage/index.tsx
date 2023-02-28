import React from "react";
import Joyride from "react-joyride";
import useJoyride from "../../lib/react-joyride";

import ScienceWelcomeBox from "../../atoms/ScienceWelcomeBox";
import SciencePageNextLessons from "../../atoms/SciencePageNextLessons";
import ScienceProgressBar from "../../molecules/ScienceProgressBar";
import ScienceAchievements from "../../molecules/ScienceAchievements";
import { SciencePageProps } from "@/src/types/Science/SciencePage";

import styles from "./rwd.module.scss";
const { wrapper, wrapperBox } = styles;

const SciencePage = ({
  userProgress,
  achievements,
  page,
  lessons,
}: SciencePageProps) => {
  const isUserFirstTime = window.localStorage.getItem("tutorialSciencePage");

  const {
    welcomeMessage,
    nextLessons,
    yourProgress,
    achievementsText,
    achievementsCongratsText,
    tutorialSteps,
  } = page;

  const threeNextLessons = lessons
    ?.slice(Number(userProgress?.lesson) - 1, lessons.length)
    .slice(0, 3);

  const { run, handleJoyrideCallback, stepIndex, steps } =
    useJoyride(tutorialSteps);

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

      <div className={wrapperBox}>
        <ScienceWelcomeBox welcomeMessage={welcomeMessage} />
        <SciencePageNextLessons
          nextLessons={nextLessons}
          threeNextLessons={threeNextLessons}
        />
      </div>
      <ScienceAchievements
        achievementsCongratsText={achievementsCongratsText}
        achievementsText={achievementsText}
        achievements={achievements}
        userProgress={userProgress}
      />
      <ScienceProgressBar
        lessons={lessons}
        userProgress={userProgress}
        yourProgress={yourProgress}
      />
    </section>
  );
};

export default SciencePage;
