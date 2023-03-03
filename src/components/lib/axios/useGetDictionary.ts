import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const useGetDictionary = async (secondValue?: string, thirdValue?: string) => {
  if (secondValue && thirdValue) {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/dictionary/${secondValue}/${thirdValue}`
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
        style: { color: "red!important", top: "50px" },
      });
    }
  }

  try {
    const { data } = await axios.get(`http://localhost:3000/api/dictionary`);
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
      style: { color: "red", top: "50px" },
    });
  }
};

export default useGetDictionary;
