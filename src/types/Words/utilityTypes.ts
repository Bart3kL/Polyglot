import { Step } from "react-joyride";
export type Word = {
  id: string;
  image: string;
  name: string;
  translation: string;
  audio: string;
  vocabluaryForSubcategoryId: string;
  subcategoryId: string;
  example1: string;
  example2: string;
};
export type WordToRepetition = {
  id: string;
  image: string;
  name: string;
  translation: string;
  audio: string;
  date: string;
};

export type WordPageContentful = {
  headerTitle: string;
  headerDescription?: string;
  tutorialSteps: Step[];
};
