import React, { useState, useEffect } from "react";

import { Word } from "@/src/types/Words/utilityTypes";

const useListening = (shuffledArray: Word[]) => {
  const [manageRepeats, useManageRepeats] = useState({
    index: 0,
    value: "",
    wordIndex: 0,
    success: false,
    repetitionsLength: shuffledArray.length,
  });

  const handleAddLetter = () => {
    const word = shuffledArray[manageRepeats.index].name.split("");
    if (
      manageRepeats.value.length >= word.length ||
      manageRepeats.value === undefined
    ) {
      return;
    }
    useManageRepeats({
      index: manageRepeats.index,
      value: manageRepeats.value + word[manageRepeats.wordIndex],
      wordIndex: manageRepeats.wordIndex + 1,
      success: manageRepeats.success,
      repetitionsLength: manageRepeats.repetitionsLength,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    useManageRepeats({
      index: manageRepeats.index,
      value: e.target.value,
      wordIndex: e.target.value.length,
      success: manageRepeats.success,
      repetitionsLength: manageRepeats.repetitionsLength,
    });
  };

  useEffect(() => {
    if (manageRepeats.value === shuffledArray[manageRepeats.index]?.name) {
      useManageRepeats({
        index: manageRepeats.index,
        value: manageRepeats.value,
        wordIndex: manageRepeats.wordIndex,
        success: true,
        repetitionsLength: manageRepeats.repetitionsLength,
      });
    }
  }, [manageRepeats.value, manageRepeats.index, shuffledArray]);

  const handleResult = async () => {
    useManageRepeats({
      index: manageRepeats.index + 1,
      value: "",
      wordIndex: 0,
      success: false,
      repetitionsLength: manageRepeats.repetitionsLength - 1,
    });
  };
  const handleCheckResult = () => {
    useManageRepeats({
      index: manageRepeats.index,
      value: manageRepeats.value,
      wordIndex: manageRepeats.wordIndex,
      success: true,
      repetitionsLength: manageRepeats.repetitionsLength,
    });
  };

  const handleSound = () => {
    new Audio(shuffledArray[manageRepeats.index]?.audio).play();
  };

  return {
    handleSound,
    handleResult,
    handleCheckResult,
    handleAddLetter,
    handleChange,
    manageRepeats,
  };
};

export default useListening;
