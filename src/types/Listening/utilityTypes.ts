import { Step } from "react-joyride";

export type PageListeningContetful = {
  checkAnswerBtn: string;
  headerTitle: string;
  hintAnswerBtn: string;
  thatsAllLabel: string;
  translatePleaceholder: string;
  checkButtonsList: { name: string; key: string }[];
  tutorialSteps: Step[];
};
