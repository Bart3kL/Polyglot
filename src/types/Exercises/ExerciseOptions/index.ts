import { Exercise } from "../utilityTypes";

export interface ExerciseOptionsProps {
  manageExercise: { index: number; answer: string; toggle: boolean };
  handleAnswer: (v: string) => void;
  exercises: Exercise[];
}
