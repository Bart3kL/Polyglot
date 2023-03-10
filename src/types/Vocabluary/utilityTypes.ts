import { Step } from "react-joyride";

export type VocabluaryWord = {
  audio: string;
  id: string;
  image: string;
  name: string;
  translation: string;
  vocabularyForLessonId: string;
};

export type VocabluaryPageContentful = {
  headerTitle: string;
  nextStep: string;
  toNextWordLabel: string;
  toStudyLabel: string;
  lessonType: string;
  tutorialSteps: Step[];
};

export type VocabluaryWordWithExamples = {
  audio: string;
  id: string;
  image: string;
  name: string;
  translation: string;
  vocabularyForLessonId: string;
};
