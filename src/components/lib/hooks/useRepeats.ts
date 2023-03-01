import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import addDays from "date-fns/addDays";
import format from "date-fns/format";

import usePatchWordToRepetitions from "../axios/usePatchWordToRepetitions";
import { useRepeatsProps } from "@/src/types/Repetitions/utilityTypes";

const useRepeats = (repetitions: useRepeatsProps[]) => {
  const { data: session }: any = useSession();
  const userId = session?.user.id;
  const [manageRepeats, useManageRepeats] = useState({
    index: 0,
    value: "",
    wordIndex: 0,
    success: false,
    repetitionsLength: repetitions.length,
  });

  const handleAddLetter = () => {
    const word = repetitions[manageRepeats.index].name.split("");
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
    if (manageRepeats.value === repetitions[manageRepeats.index]?.name) {
      useManageRepeats({
        index: manageRepeats.index,
        value: manageRepeats.value,
        wordIndex: manageRepeats.wordIndex,
        success: true,
        repetitionsLength: manageRepeats.repetitionsLength,
      });
    }
  }, [manageRepeats.value, manageRepeats.index, repetitions]);

  const handleResult = async (power: number) => {
    const today = new Date();
    const added = addDays(today, power);
    const todayString = String(format(added, "yyyy-MM-dd"));

    usePatchWordToRepetitions(userId, repetitions[manageRepeats.index].id, {
      ...repetitions[manageRepeats.index],
      date: todayString,
    });

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

  return {
    handleResult,
    handleCheckResult,
    handleAddLetter,
    handleChange,
    manageRepeats,
  };
};

export default useRepeats;
