import { Flashcard } from "../utilityTypes";

export interface FlashCardsCardProps {
  data: Flashcard[];
  showBtn: boolean;
  step?: number;
  showToNextStepBtn: boolean;
  headerTitle: string;
  loadWordBtn: string;
  btnLabel: string;
  clickLabel?: string;
  word?: string;
}
