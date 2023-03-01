import axios from "axios";
import { format } from "date-fns";
import { Word } from "@/src/types/Words/utilityTypes";

function usePostWordToRepetitions(word: Word, userId: string) {
  const today = String(format(new Date(), "yyyy-MM-dd"));
  axios.post("/api/repetitions", { ...word, userId, power: "0", date: today });
}
export default usePostWordToRepetitions;
