import { userProgress, Achievement } from "../utilityTypes";

export interface ScienceAchievementsProps {
  achievements: Achievement[];
  userProgress: userProgress;
  achievementsText: string;
  achievementsCongratsText: string;
}
