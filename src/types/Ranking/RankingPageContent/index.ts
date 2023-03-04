import { RankingContentful } from "../utilityTypes";
import { Achievement } from "../../Science/utilityTypes";

export interface RankingPageContentProps {
  ranking: any;
  page: RankingContentful;
  achievements: Achievement[];
}
