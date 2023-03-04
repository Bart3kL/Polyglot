import Image from "next/image";
import React from "react";
import Link from "next/link";

import usePostProgress from "../../lib/axios/usePostProgress";
import { GrammarLessonProps } from "@/src/types/Grammar/GrammarLesson";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle, wrapperImage, wrapperButton } = styles;

const GrammarLesson = ({
  image,
  title,
  grammarForLessonId,
  nextStep,
}: GrammarLessonProps) => {
  const lessonStep = usePostProgress();

  return (
    <div className={wrapper}>
      <h2 className={wrapperTitle}>{title}</h2>
      <div className={wrapperImage}>
        <Image
          src={image}
          alt="Picture of the author"
          width={1200}
          height={600}
        />
      </div>
      <div
        className={wrapperButton}
        onClick={() => lessonStep(grammarForLessonId, "3")}
      >
        <Link href={`/nauka/lekcje/${parseInt(grammarForLessonId)}/cwiczenia`}>
          {nextStep}
        </Link>
      </div>
    </div>
  );
};

export default GrammarLesson;
