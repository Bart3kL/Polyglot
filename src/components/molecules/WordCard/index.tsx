import React, { useState } from "react";

import WordCardImage from "../../atoms/WordCardImage";
import WordCardSentences from "../../atoms/WordCardSentences";
import { Icons } from "../../shared";
import { WordCardProps } from "@/src/types/Words/WordCard";

import styles from "./rwd.module.scss";
const { wrapper, wrapperDetails, wrapperDetailsActions } = styles;

const WordCard = ({
  name,
  translation,
  audio,
  example1,
  example2,
  image,
}: WordCardProps) => {
  const [showSentences, setShowSentences] = useState(false);
  const handleSound = () => {
    const sound = new Audio(audio);
    sound.play();
  };
  return (
    <>
      <li className={wrapper}>
        {showSentences ? (
          <WordCardSentences
            example1={example1}
            example2={example2}
            handleToggleSentences={() => setShowSentences(!showSentences)}
          />
        ) : (
          <>
            <WordCardImage image={image} />
            <div className={wrapperDetails}>
              <p>{name}</p>
              <p>{translation}</p>
              <div className={wrapperDetailsActions}>
                <Icons.BsFillVolumeUpFill onClick={handleSound} />
                <button onClick={() => setShowSentences(!showSentences)}>
                  Zdania
                </button>
              </div>
            </div>
          </>
        )}
      </li>
    </>
  );
};

export default WordCard;
