import React from "react";
import Link from "next/link";

import usePostProgress from "../../lib/axios/usePostProgress";
import VocabluaryCard from "../../atoms/VocabluaryCard";
import useVocabluaryCard from "../../lib/hooks/useVocabluaryCard";
import { VocabluaryContentProps } from "@/src/types/Vocabluary/VocabluaryContent";

import styles from "./rwd.module.scss";
const { wrapperNextLesson, wrapperCard } = styles;

const VocabluaryContent = ({
  vocabluary,
  nextStep,
  toNextWordLabel,
  toStudyLabel,
}: VocabluaryContentProps) => {
  const lessonStep = usePostProgress();

  const { wordIndex, handleToStudy, handleToNextWord, handleSound } =
    useVocabluaryCard(vocabluary);

  return (
    <>
      {wordIndex === vocabluary.length ? (
        <div
          className={wrapperNextLesson}
          onClick={() => lessonStep(vocabluary[0].vocabularyForLessonId, "2")}
        >
          <Link
            href={`/nauka/lekcje/${parseInt(
              vocabluary[0].vocabularyForLessonId
            )}/gramatyka`}
          >
            {nextStep}
          </Link>
        </div>
      ) : (
        <div className={wrapperCard}>
          <VocabluaryCard
            vocabluary={vocabluary}
            wordIndex={wordIndex}
            handleSound={handleSound}
            handleToStudy={handleToStudy}
            handleToNextWord={handleToNextWord}
            toNextWordLabel={toNextWordLabel}
            toStudyLabel={toStudyLabel}
          />
        </div>
      )}
    </>
  );
};

export default VocabluaryContent;
