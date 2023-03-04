import axios from "axios";
import { toast } from "react-toastify";

export async function usePostNote(
  note: { subject: string; convertedText: string },
  userId: string
) {
  const id = toast.loading("Proszę czekać...", {
    style: { top: "50px" },
    position: "top-right",
  });
  try {
    await axios.post(`/api/notes/${userId}`, { ...note, userId: userId });

    toast.update(id, {
      render: "",
      type: "success",
      isLoading: false,
      style: { top: "50px" },
    });
  } finally {
    toast.update(id, {
      render: "Wczytywanie...",
      position: "top-right",
      type: "success",
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
