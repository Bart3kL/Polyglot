import { Step } from "react-joyride";
export interface WordCardImageProps {
  image: string;
  manageWord: { exist: boolean; toggle: boolean };
  handleDeleteWordFromRepetitions: () => void;
  handleWordToRepetitions: () => void;
  index: number;
  tutorialSteps: Step[];
}
