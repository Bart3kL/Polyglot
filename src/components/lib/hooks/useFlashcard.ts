import React, { useState } from "react";
import { useSession } from "next-auth/react";
import addDays from "date-fns/addDays";
import format from "date-fns/format";

import { useDeleteFlashCard } from "../axios/useDeleteFlashCard";
import { usePatchStepFlashCard } from "./../axios/usePatchStepFlashCard";
import usePutFlashcards from "../axios/usePutFlashcards";
import { Flashcard } from "@/src/types/Flashcards/utilityTypes";

const useFlashcard = (data: Flashcard[]) => {
  const [toggle, setToggle] = useState(false);
  const [nextWord, setNextWord] = useState(0);
  const { data: session }: any = useSession();

  const handleLoadWords = async () => {
    usePutFlashcards(session.user.id);
  };

  const handleSound = () => {
    new Audio(data[nextWord].audio).play();
  };
  const handleToNextStep = () => {
    setToggle(false);
    const nextStep = Number(data[nextWord].step) + 1;
    const today = new Date();

    const checkDate = () => {
      switch (true) {
        case Number(data[nextWord].step) === 0:
          const added = addDays(today, 1);
          return String(format(added, "yyyy-MM-dd"));
        case Number(data[nextWord].step) === 1:
          const added2 = addDays(today, 4);
          return String(format(added2, "yyyy-MM-dd"));
        case Number(data[nextWord].step) === 2:
          const added3 = addDays(today, 9);
          return String(format(added3, "yyyy-MM-dd"));
        case Number(data[nextWord].step) === 3:
          const added4 = addDays(today, 16);

          return String(format(added4, "yyyy-MM-dd"));
      }
    };

    const newId = data[nextWord].id;
    const newData = {
      id: data[nextWord].id,
      userId: data[nextWord].userId,
      name: data[nextWord].name,
      translation: data[nextWord].translation,
      step: String(nextStep),
      audio: data[nextWord].audio,
      image: data[nextWord].image,
      example1: data[nextWord].example1,
      example2: data[nextWord].example2,
      date: checkDate(),
    };
    if (Number(data[nextWord].step) === 5) {
      useDeleteFlashCard(session?.user.id, data[nextWord].id);
      return;
    }
    data.splice(nextWord, 1);
    usePatchStepFlashCard(newData, session?.user.id, newId);
  };
  return {
    setToggle,
    setNextWord,
    handleLoadWords,
    handleToNextStep,
    handleSound,
    toggle,
    nextWord,
  };
};

export default useFlashcard;
