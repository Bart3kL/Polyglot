import axios from "axios";
import { toast } from "react-toastify";
// import { Word } from "../../components/types/WordsPage/WordCard/utilityTypes";

export async function usePostFlashcard(data: any, userid: string) {
  const id = toast.loading("Proszę czekać...");
  try {
    await axios.post(`/api/flashcards/${userid}`, data);
    toast.update(id, {
      render: "Ładowanie",
      type: "success",
      isLoading: false,
    });
  } finally {
    toast.update(id, {
      render: "Dodano!",
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
