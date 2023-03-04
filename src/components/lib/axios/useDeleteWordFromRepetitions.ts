import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

async function useDeleteWordFromRepetitions(userId: string, wordId: string) {
  try {
    await axios.delete(
      `https://polyglot-bart3kl.vercel.app/api/repetitions/${userId}/${wordId}`
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
}
export default useDeleteWordFromRepetitions;
