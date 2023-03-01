import React, { useState } from "react";
import { useSession } from "next-auth/react";

import usePostWordToRepetitions from "../axios/usePostWordToRepetitions";

const useVocabluaryCard = (vocabluary: any) => {
  const { data: session }: any = useSession();

  const [wordIndex, setWordIndex] = useState(0);

  const handleToStudy = () => {
    usePostWordToRepetitions(vocabluary[wordIndex], session.user.id);

    setWordIndex(wordIndex + 1);
  };
  const handleToNextWord = () => {
    setWordIndex(wordIndex + 1);
  };
  const handleSound = () => {
    const audio = new Audio(vocabluary[wordIndex].audio);
    audio.play();
  };
  return { wordIndex, handleToStudy, handleToNextWord, handleSound };
};

export default useVocabluaryCard;
