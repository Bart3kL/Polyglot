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
export interface CustomReqQuery {
  id: string;
}

export type SessionType = {
  expires: string;
  user: {
    name: string;
    email: string;
    id: string;
    image: string;
  };
} | null;

export type SessionUserType = {
  expires: string;
  user: {
    name: string | null;
    email: string | null | undefined;
    id: string | null | undefined;
    image: string | null | undefined;
  };
} | null;
