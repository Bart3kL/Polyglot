import React from "react";
import Joyride from "react-joyride";

import useJoyride from "../../lib/react-joyride";
import { Icons } from "../../shared";
import ScienceWelcomeBox from "../../atoms/ScienceWelcomeBox";
import SciencePageNextLessons from "../../atoms/SciencePageNextLessons";
import ScienceProgressBar from "../../molecules/ScienceProgressBar";
import ScienceAchievements from "../../molecules/ScienceAchievements";
import { SciencePageProps } from "@/src/types/Science/SciencePage";
import usePostProgress from "@/src/components/lib/axios/usePostProgress";

import styles from "./rwd.module.scss";
const { wrapper, wrapperBox, wrapperTutorial } = styles;

const SciencePage = ({
  userProgress,
  achievements,
  page,
  lessons,
}: SciencePageProps) => {
  const {
    welcomeMessage,
    nextLessons,
    yourProgress,
    achievementsText,
    achievementsCongratsText,
    tutorialSteps,
  } = page;
  const fetchLessonStep = usePostProgress();
  fetchLessonStep(userProgress.lesson, userProgress.lessonStep);

  const threeNextLessons = lessons
    ?.slice(Number(userProgress?.lesson) - 1, lessons.length)
    .slice(0, 3);

  const {
    run,
    handleJoyrideCallback,
    stepIndex,
    steps,
    handleResetTutorial,
    isUserFirstTime,
  } = useJoyride(tutorialSteps, "tutorialSciencePage");

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

export default SciencePage;
