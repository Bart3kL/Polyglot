import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { format } from "date-fns";

import { usePostFlashcard } from "./../axios/usePostFlashcard";

const useFlashCardsForm = () => {
  const [singleWord, setSingleWord] = useState("");
  const [singleTranslation, setSingleTranslation] = useState("");

  const { data: session }: any = useSession();

  const handleAddWord = () => {
    const today = String(format(new Date(), "yyyy-MM-dd"));
    setSingleTranslation("");
    setSingleWord("");
    const data = {
      id: String(Math.random() * 100000),
      userId: session?.user.id,
      name: singleWord,
      translation: singleTranslation,
      step: "0",
      date: today,
    };

    usePostFlashcard(data, session?.user.id);
  };
  return {
    handleAddWord,
    setSingleTranslation,
    singleTranslation,
    setSingleWord,
    singleWord,
  };
};

export default useFlashCardsForm;
