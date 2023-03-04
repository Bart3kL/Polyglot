import { userDetails, RankingContentful } from "../utilityTypes";
import { Achievement } from "../../Science/utilityTypes";

export interface RankingPageProps {
  ranking: {
    userDetails: userDetails;
    flashcardsLength: number;
    repetitionsLength: number;
  };
  page: RankingContentful;
  achievements: Achievement[];
}
