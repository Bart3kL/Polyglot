export interface RepetitionsDefaultButtonsProps {
  handleAddLetter: () => void | number;
  handleCheckResult: (v: number) => void;
  repetitionsLength: number;
  checkAnswerBtn: string;
  hintAnswerBtn: string;
  value: string;
}
