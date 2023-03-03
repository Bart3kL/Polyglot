import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { Word } from "@/src/types/Words/utilityTypes";

function usePostWordToRepetitions(word: Word, userId: string) {
  const today = String(format(new Date(), "yyyy-MM-dd"));
  try {
    axios.post("/api/repetitions", {
      ...word,
      userId,
      power: "0",
      date: today,
      id: `${word.id}${userId}`,
    });
  } catch (e) {
    const err = e as AxiosError;
    toast.error(`⚔️ ${err.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: { top: "50px" },
    });
  }
}
export default usePostWordToRepetitions;
