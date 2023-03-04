import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const useGetLessons = async (secondValue?: string, thirdValue?: string) => {
  if (secondValue && thirdValue) {
    try {
      const { data } = await axios.get(
        `https://polyglot-bart3kl.vercel.app/api/dictionary/${secondValue}/${thirdValue}`
      );
      return data;
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

  try {
    const { data } = await axios.get(
      `https://polyglot-bart3kl.vercel.app/api/lessons`
    );
    return data;
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

export default useGetLessons;
