import { userDetails } from "../utilityTypes";
import { Achievement } from "../../Science/utilityTypes";

export interface RankingSingleUserProps {
  userDetails: userDetails[];
  flashcardsLength: number;
  repetitionsLength: number;
  index: number;
  achievements: Achievement[];
  lessonLabel: string;
  flashcardAmountLabel: string;
  repetitionsAmountLabel: string;
}
