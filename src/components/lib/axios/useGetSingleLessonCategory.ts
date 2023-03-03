import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export default async function useGetSingleLessonCategory(
  category: string,
  id: string
) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/lessons/${id}/${category}`
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
