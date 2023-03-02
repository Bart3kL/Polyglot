import { Step } from "react-joyride";

export type Flashcard = {
  audio: string;
  date: string;
  example1: string;
  example2: string;
  id: string;
  image: string;
  name: string;
  step: string;
  translation: string;
  userId: string;
};

export type FlashcardsContentful = {
  addWordLabel: string;
  btnLabel: string;
  title: string;
  clickLabel: string;
  formTitle: string;
  headerTitle: string;
  inputTranslationlabel: string;
  inputWordLabel: string;
  loadWordBtn: string;
  steps: { name: string }[];
  translation: string;
  tutorialSteps: Step[];
  word: string;
};
