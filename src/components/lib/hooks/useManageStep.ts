import React, { useState } from "react";

import { Flashcard } from "@/src/types/Flashcards/utilityTypes";

const useManageStep = (data: Flashcard[]) => {
  const [showStepFlashcards, setShowStepFlashcards] = useState({
    show: false,
    index: 0,
  });

  const filteredDataByStep = data.filter((word) => word.step === "0");

  const [filteredData, setFilteredData] = useState(filteredDataByStep);

  const handleChangeStep = (i: number) => {
    const filteredDataByStep = data.filter((word) => word.step === String(i));
    setFilteredData(filteredDataByStep);
    setShowStepFlashcards({ show: true, index: i });
  };
  return { filteredData, handleChangeStep, showStepFlashcards };
};

export default useManageStep;
