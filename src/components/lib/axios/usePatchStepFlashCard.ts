import axios from "axios";
import { toast } from "react-toastify";

export async function usePatchStepFlashCard(
  newData: any,
  userid: string,
  wordid: string
) {
  const id = toast.loading("Proszę czekać...");
  try {
    await axios.patch(`/api/flashcards/${userid}/${wordid}`, newData);
    toast.update(id, {
      render: "Ładowanie",
      type: "success",
      isLoading: false,
    });
  } finally {
    toast.update(id, {
      render: "Przeniesiono do następnego poziomu!",
      type: "success",
      isLoading: false,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
}
