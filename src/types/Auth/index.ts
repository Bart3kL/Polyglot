import { Session, Token, Provider } from "./utilityTypes";

export interface SessionProps {
  session: Session;
  token: Token;
}
export type TokenProps = {
  token: Token;
} & Session;

export interface LoginButtonProps {
  provider: Provider;
  index: number;
}
