import { Quote } from "../utilityTypes";

export interface HomePageProps {
  logInBtn: string;
  logOutBtn: string;
  loginMessage: string;
  title: string;
  welcomeMessage: string;
  quotes: Quote[];
}
