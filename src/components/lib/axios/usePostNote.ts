import axios from "axios";
import { toast } from "react-toastify";

export async function usePostNote(note: any, userId: any) {
  const id = toast.loading("Proszę czekać...");
  try {
    await axios.post(`/api/notes/${userId}`, { ...note, userId: userId });

    toast.update(id, {
      render: "",
      type: "success",
      isLoading: false,
      style: { color: "white", top: "50px" },
    });
  } finally {
    toast.update(id, {
      render: "Wczytywanie...",
      type: "success",
      isLoading: false,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: { color: "white", top: "50px" },
    });
  }
}
