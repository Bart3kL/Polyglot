export interface RepetitionsDefaultButtonsProps {
  handleAddLetter: () => void;
  handleCheckResult: (v: number) => void;
  repetitionsLength: number;
  checkAnswerBtn: string;
  hintAnswerBtn: string;
  value: string;
}
