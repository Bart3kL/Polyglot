import { Step } from "react-joyride";

export type Note = {
  id: string;
  notes: string;
  subject: string;
  userId: string;
};

export type NotesContentful = {
  buttonLabel: string;
  noteLabel: string;
  subjectLabel: string;
  subjectPleaceholder: string;
  tutorialSteps: Step[];
};
