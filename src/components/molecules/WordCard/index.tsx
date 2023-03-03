import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { BarLoader } from "react-spinners";

import { override } from "../../lib/spinner";
import WordCardImage from "../../atoms/WordCardImage";
import WordCardSentences from "../../atoms/WordCardSentences";
import { Icons } from "../../shared";
import { WordCardProps } from "@/src/types/Words/WordCard";
import useAddWordToRepetitionsts from "../../lib/hooks/useAddWordToRepetitions";
import useGet from "../../lib/axios/useGet";
import { Repetition } from "@/src/types/Repetitions/utilityTypes";

import styles from "./rwd.module.scss";
const { wrapper, wrapperDetails, wrapperDetailsActions } = styles;

const WordCard = ({ word, userId }: WordCardProps) => {
  const userid = `${word.id}${userId}`;
  const { data: words, isLoading } = useQuery({
    queryKey: ["singleWord", word.id],
    queryFn: () => useGet("repetitions", `${userId}/${userid}`),
  });

  const {
    manageWord,
    setManageWord,
    handleWordToRepetitions,
    handleDeleteWordFromRepetitions,
    handleToggleSentences,
  } = useAddWordToRepetitionsts(word, userId, userid);

  const handleSound = () => {
    const audio = new Audio(word.audio);
    audio.play();
  };

  useEffect(() => {
    if (words) {
      words.find((words: Repetition) => words.name === word.name)
        ? setManageWord({ exist: true, toggle: manageWord.toggle })
        : setManageWord({ exist: false, toggle: manageWord.toggle });
    }
  }, [word.id, words]);
  return (
    <>
      {isLoading ? (
        <li className={wrapper}>
          <BarLoader
            color={"#1f2233"}
            loading={isLoading}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </li>
      ) : (
        <li className={wrapper}>
          {!manageWord.toggle ? (
            <>
              <WordCardImage
                image={word.image}
                manageWord={manageWord}
                handleDeleteWordFromRepetitions={
                  handleDeleteWordFromRepetitions
                }
                handleWordToRepetitions={handleWordToRepetitions}
              />
              <div className={wrapperDetails}>
                <p>{word.name}</p>
                <p>{word.translation}</p>
                <div className={wrapperDetailsActions}>
                  <Icons.BsFillVolumeUpFill onClick={handleSound} />
                  <button onClick={handleToggleSentences}>Zdania</button>
                </div>
              </div>
            </>
          ) : (
            <WordCardSentences
              example1={word.example1}
              example2={word.example2}
              handleToggleSentences={handleToggleSentences}
            />
          )}
        </li>
      )}
    </>
  );
};

export default WordCard;
