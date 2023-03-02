import { Word } from "../../Words/utilityTypes";
import { HangmanContentful } from "../utilityTypes";

export interface HangmanPageProps {
  words: Word[];
  page: HangmanContentful;
}
