import axios from "axios";
import { toast } from "react-toastify";
import { FlashcardPatch } from "@/src/types/Flashcards/utilityTypes";

export async function usePatchStepFlashCard(
  newData: FlashcardPatch,
  userid: string,
  wordid: string
) {
  const id = toast.loading("Proszę czekać...", {
    position: "top-right",
    style: { top: "50px" },
  });
  try {
    await axios.patch(`/api/flashcards/${userid}/${wordid}`, newData);
    toast.update(id, {
      render: "Ładowanie",
      type: "success",
      isLoading: false,
      style: { top: "50px" },
    });
  } finally {
    toast.update(id, {
      render: "Przeniesiono do następnego poziomu!",
      type: "success",
      position: "top-right",
      isLoading: false,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: { top: "50px" },
    });
  }
}
