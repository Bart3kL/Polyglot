import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

import { SessionProps } from "@/src/types/Auth";
import { TokenProps } from "@/src/types/Auth";

export const authOptions: any = {
  callbacks: {
    session: async ({ session, token }: SessionProps) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }: TokenProps) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      //@ts-ignore
      clientId: process.env.GITHUB_ID,
      //@ts-ignore
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      //@ts-ignore
      clientId: process.env.GOOGLE_ID,
      //@ts-ignore
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      //@ts-ignore
      clientId: process.env.FACEBOOK_ID,
      //@ts-ignore
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
export default NextAuth(authOptions);
