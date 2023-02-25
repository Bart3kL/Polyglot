import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

import HomeSlider from "../../molecules/HomeSlider";
import { HomePageProps } from "@/src/types/Home/HomePage";
import HomeLoginBox from "../../atoms/HomeLoginBox";

import styles from "./rwd.module.scss";
const { wrapper, wrapperWelcomeMessage, wrapperLoginBtn } = styles;

export default function HomePage({
  quotes,
  title,
  welcomeMessage,
  loginMessage,
  logInBtn,
  logOutBtn,
}: HomePageProps) {
  const { data: session } = useSession();

  return (
    <section className={wrapper}>
      {session ? (
        <HomeLoginBox
          message={welcomeMessage}
          buttonName={logOutBtn}
          username={session.user?.name}
          onClick={() => signOut()}
        />
      ) : (
        <HomeLoginBox
          message={loginMessage}
          buttonName={logInBtn}
          title={title}
          onClick={() => signIn()}
        />
      )}
      <HomeSlider quotes={quotes} />
    </section>
  );
}
