import axios from "axios";
import { toast } from "react-toastify";

export async function usePostFlashcard(data: any, userid: string) {
  const id = toast.loading("Proszę czekać...", {
    style: { color: "white!important", top: "50px" },
    position: "top-right",
  });
  try {
    await axios.post(`/api/flashcards/${userid}`, data);
    toast.update(id, {
      render: "Ładowanie",
      type: "success",
      isLoading: false,
      style: { top: "50px" },
    });
  } finally {
    toast.update(id, {
      render: "Dodano!",
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
