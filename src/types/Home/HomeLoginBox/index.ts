export interface HomeLoginBox {
  username?: string | undefined | null;
  title?: string;
  message: string;
  buttonName: string;
  onClick: () => void;
}
