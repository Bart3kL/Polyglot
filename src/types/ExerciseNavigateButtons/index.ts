export interface ExerciseNavigateButtonsProps {
  nextWord: boolean;
  hideCheckBtn: string | undefined;
  handleCheckAnswer: () => void;
  handleNextQuestion: () => void;
  checkButtonLabel: string;
  nextButtonLabel: string;
}
