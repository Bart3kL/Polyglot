import { getServerSession } from "next-auth/next";
import type { GetServerSidePropsContext } from "next";

import { Icons } from "@/src/components/shared";
import LoginButton from "@/src/components/atoms/LoginButton";
import { authOptions } from "../api/auth/[...nextauth]";
import { providers } from "./untils";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle, wrapperButtons } = styles;

export default function SignInPage() {
  return (
    <div className={wrapper}>
      <Icons.LogoSmall />
      <h1 className={wrapperTitle}>Wybierz sposób logowania</h1>
      <div className={wrapperButtons}>
        {Object.values(providers).map((provider, i) => (
          <LoginButton provider={provider} index={i} key={provider.name} />
        ))}
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
