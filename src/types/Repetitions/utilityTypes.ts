import { Step } from "react-joyride";

export type RepetitionsContentful = {
  checkAnswerBtn: string;
  headerTitle: string;
  hintAnswerBtn: string;
  thatsAll: string;
  translatePleaceholder: string;
  checksButtonsList: { name: string; key: string }[];
  tutorialSteps: Step[];
  tutorialStepsChecksButtons: Step[];
};

export type Repetition = {
  audio: string;
  data: null;
  date: string;
  id: string;
  image: string;
  name: string;
  power: string;
  translation: string;
  userId: string;
};

export type useRepeatsProps = {
  id: string;
  audio: string;
  userId?: string | undefined;
  example1?: string;
  example2?: string;
  image: string;
  name: string;
  step?: string | number | undefined;
  translation: string;
  vocabluaryForSubcategoryId?: string;
};
