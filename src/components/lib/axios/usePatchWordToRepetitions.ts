import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const usePatchWordToRepetitions = async (
  userId: string,
  wordId: string,
  data: any
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
