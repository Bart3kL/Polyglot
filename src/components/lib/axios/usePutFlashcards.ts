import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const usePutFlashcards = async (id: string) => {
  const bar = toast.loading("Wczytywanie...", {
    style: { top: "50px" },
  });
  try {
    await axios.put(`/api/flashcards/${id}`, {
      session: id,
    });
  } finally {
    toast.update(bar, {
      render: "Wczytywanie...",
      position: "top-right",
      type: "success",
      isLoading: false,
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      style: { top: "50px" },
      draggable: true,
    });
  }
};

export default usePutFlashcards;
