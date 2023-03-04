import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { WordToRepetition } from "@/src/types/Words/utilityTypes";

const usePatchWordToRepetitions = async (
  userId: string,
  wordId: string,
  data: WordToRepetition
) => {
  try {
    await axios.post(
      `http://localhost:3000/api/repetitions/${userId}/${wordId}`,
      data
    );
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
};

export default usePatchWordToRepetitions;
