import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export default async function useGet(table: string, secondTable?: string) {
  if (secondTable) {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/${table}/${secondTable}`
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
        style: { color: "red", top: "50px" },
      });
    }
  }
  try {
    const { data } = await axios.get(`http://localhost:3000/api/${table}/`);
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
}
