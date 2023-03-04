import axios, { AxiosError } from "axios";
import { format } from "date-fns";
import { Word } from "@/src/types/Words/utilityTypes";

async function usePostWordToRepetitions(word: any, userId: string) {
  const today = String(format(new Date(), "yyyy-MM-dd"));
  try {
    await axios.post("/api/repetitions", {
      ...word,
      userId,
      power: "0",
      date: today,
      id: `${word.id}${userId}`,
    });
  } catch (e) {
    const err = e as AxiosError;
  }
}
export default usePostWordToRepetitions;
