export type Session = {
  user: { id: string };
};
export type Token = {
  uid: string;
};
export type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
};
