import React from "react";
import { useSession } from "next-auth/react";
import Joyride from "react-joyride";

import useJoyride from "../../lib/react-joyride";
import DictionaryHeader from "../../atoms/DictionaryHeader";
import { WordsPageProps } from "@/src/types/Words/WordsPage";
import WordCard from "../../molecules/WordCard";
import ErrorNoAccessDictionarty from "@/src/components/atoms/ErrorNoAccessDictionarty";
import { Icons } from "../../shared";

import styles from "./rwd.module.scss";
const { wrapper, wrapperList, wrapperOverlay, wrapperTutorial } = styles;

export default function WordsPage({
  page: { headerTitle, headerDescription, tutorialSteps },
  words,
}: WordsPageProps) {
  const { data: session } = useSession();
  const {
    run,
    handleJoyrideCallback,
    stepIndex,
    steps,
    handleResetTutorial,
    isUserFirstTime,
  } = useJoyride(tutorialSteps, "tutorialWordPage");
  return (
    <>
      <DictionaryHeader title={headerTitle} description={headerDescription} />
      {session ? (
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
          <ul className={wrapperList}>
            {words.map((word, i) => (
              <WordCard
                key={word.name}
                word={word}
                userId={session.user.id}
                index={i}
                tutorialSteps={tutorialSteps}
              />
            ))}
          </ul>
          <div
            className={wrapperTutorial}
            id="tutorial"
            onClick={() => handleResetTutorial()}
          >
            <Icons.BsQuestionLg />
          </div>
        </section>
      ) : (
        <section className={wrapperOverlay}>
          <ErrorNoAccessDictionarty />
        </section>
      )}
    </>
  );
}
