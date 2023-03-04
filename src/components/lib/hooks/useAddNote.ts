import React, { useState } from "react";
import { useSession } from "next-auth/react";

import { usePostNote } from "./../axios/usePostNote";

const useAddNote = () => {
  const [subject, setSubject] = useState("");
  const [convertedText, setConvertedText] = useState("Wpisz coś...");

  const { data: session } = useSession();

  const handleAddNote = () => {
    usePostNote({ subject, convertedText }, session?.user.id);
    setSubject("");
    setConvertedText("");
  };

  return {
    setSubject,
    handleAddNote,
    subject,
    setConvertedText,
    convertedText,
  };
};

export default useAddNote;
