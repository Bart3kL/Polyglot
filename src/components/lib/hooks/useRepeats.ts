import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { useGetSingleWordFromRepetitions } from "../axios/useGetSingleWordFromRepetitions";

export type useRepeatsProps = {
  id: string;
  audio: string;
  userId?: string | undefined;
  example1?: string;
  example2?: string;
  image: string;
  name: string;
  step?: string | number | undefined;
  translation: string;
  vocabluaryForSubcategoryId?: string;
};

const useRepeats = (repetitions: useRepeatsProps[]) => {
  const [manageRepeats, useManageRepeats] = useState({
    index: 0,
    value: "",
    wordIndex: 0,
    success: false,
    knowledge: 0,
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
      knowledge: manageRepeats.knowledge,
      repetitionsLength: manageRepeats.repetitionsLength,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    useManageRepeats({
      index: manageRepeats.index,
      value: e.target.value,
      wordIndex: e.target.value.length,
      success: manageRepeats.success,
      knowledge: manageRepeats.knowledge,
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
        knowledge: manageRepeats.knowledge,
        repetitionsLength: manageRepeats.repetitionsLength,
      });
    }
  }, [manageRepeats.value, manageRepeats.index, repetitions]);

  const { data: dataa }: any = useSession();
  const handleResult = async (power: number) => {
    const userId = dataa?.user.id;

    useManageRepeats({
      index: manageRepeats.index + 1,
      value: "",
      wordIndex: 0,
      success: false,
      knowledge: power,
      repetitionsLength: manageRepeats.repetitionsLength - 1,
    });

    const word = await useGetSingleWordFromRepetitions(
      userId,
      repetitions[manageRepeats.index].id
    );
    const setNewKnowledgeWord =
      manageRepeats.knowledge === 0
        ? 0
        : manageRepeats.knowledge + Number(word[0].power);

    await fetch(
      `https://page-for-learning-english.vercel.app/api/repetitions/${userId}/${
        repetitions[manageRepeats.index].id
      }`,
      {
        method: "PATCH",
        body: JSON.stringify({
          ...repetitions[manageRepeats.index],
          power: setNewKnowledgeWord,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
  };
  const handleCheckResult = (power: number) => {
    useManageRepeats({
      index: manageRepeats.index,
      value: manageRepeats.value,
      wordIndex: manageRepeats.wordIndex,
      success: true,
      knowledge: power,
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
