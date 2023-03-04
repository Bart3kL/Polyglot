import React, { useState } from "react";

import usePostWordToRepetitions from "../axios/usePostWordToRepetitions";
import useDeleteWordFromRepetitions from "../axios/useDeleteWordFromRepetitions";
import { Word } from "@/src/types/Words/utilityTypes";
const useAddWordToRepetitionsts = (
  word: Word,
  userId: string,
  wordId: string
) => {
  const [manageWord, setManageWord] = useState({ exist: false, toggle: false });
  const handleToggleSentences = () => {
    setManageWord({ exist: manageWord.exist, toggle: !manageWord.toggle });
  };
  const handleWordToRepetitions = () => {
    setManageWord({ exist: true, toggle: manageWord.toggle });
    usePostWordToRepetitions(word, userId);
  };
  const handleDeleteWordFromRepetitions = () => {
    setManageWord({ exist: false, toggle: manageWord.toggle });
    useDeleteWordFromRepetitions(userId, wordId);
  };

  return {
    manageWord,
    setManageWord,
    handleWordToRepetitions,
    handleDeleteWordFromRepetitions,
    handleToggleSentences,
  };
};

export default useAddWordToRepetitionsts;
