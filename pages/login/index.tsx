import { getServerSession } from "next-auth/next";
import type { GetServerSidePropsContext } from "next";

import { Icons } from "@/src/components/shared";
import LoginButton from "@/src/components/atoms/LoginButton";
import { authOptions } from "../api/auth/[...nextauth]";
import { providers } from "./untils";

import styles from "./rwd.module.scss";
const { wrapper, wrapperBox, wrapperBoxTitle, wrapperBoxButtons } = styles;

export default function SignInPage() {
  return (
    <div className={wrapper}>
      <div className={wrapperBox}>
        <Icons.LogoSmall />
        <h1 className={wrapperBoxTitle}>Wybierz sposób logowania</h1>
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
  return { props: {} };
}
