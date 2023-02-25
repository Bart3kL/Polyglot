import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

import styles from "./rwd.module.scss";
const { wrapper, wrapperWelcomeMessage, wrapperLoginBtn } = styles;
import HomeSlider from "../../molecules/HomeSlider";

export default function HomePage({ page }: any) {
  const { data: session } = useSession();
  return (
    <section className={wrapper}>
      {session ? (
        <>
          <h2 className={wrapperWelcomeMessage}>
            <p>Cześć, {session.user?.name}</p>
          </h2>
          <button className={wrapperLoginBtn} onClick={() => signOut()}>
            Wyloguj się
          </button>
        </>
      ) : (
        <>
          <p>{page[0].fields.author}</p>
          <h2 className={wrapperWelcomeMessage}>
            <p>Ucz się angielskiego za darmo</p> Zaloguj się i korzystaj ze
            wszystkich funkcjonalności
          </h2>
          <button className={wrapperLoginBtn} onClick={() => signIn()}>
            Zaloguj się
          </button>
        </>
      )}
      <HomeSlider />
    </section>
  );
}
