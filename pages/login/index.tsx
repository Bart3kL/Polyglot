import { getServerSession } from "next-auth/next";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders } from "next-auth/react";

import { Icons } from "@/src/components/shared";
import LoginButton from "@/src/components/atoms/LoginButton";
import { authOptions } from "../api/auth/[...nextauth]";

import styles from "./rwd.module.scss";
const { wrapper, wrapperBox, wrapperBoxTitle, wrapperBoxButtons } = styles;

export default function SignInPage({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={wrapper}>
      <div className={wrapperBox}>
        <Icons.LogoSmall />
        <h1 className={wrapperBoxTitle}>Logowanie</h1>
        <div className={wrapperBoxButtons}>
          {Object.values(providers).map((provider, i) => (
            <LoginButton provider={provider} index={i} key={provider.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return { props: { providers: providers ?? [] } };
}
