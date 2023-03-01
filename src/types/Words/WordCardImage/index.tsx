export interface WordCardImageProps {
  image: string;
  manageWord: { exist: boolean; toggle: boolean };
  handleDeleteWordFromRepetitions: () => void;
  handleWordToRepetitions: () => void;
}
