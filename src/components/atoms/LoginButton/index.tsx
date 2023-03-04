import { signIn } from "next-auth/react";

import { Icons } from "@/src/components/shared";
import { LoginButtonProps } from "@/src/types/Auth";

import styles from "./rwd.module.scss";
const { wrapper, wrapperName } = styles;

const renderSwitch = (index: number) => {
  switch (true) {
    case index === 0:
      return <Icons.FcGoogle />;
    case index === 1:
      return <Icons.VscGithubInverted />;
    case index === 2:
      return <Icons.TfiFacebook />;
  }
};

const LoginButton = ({ provider, index }: LoginButtonProps) => {
  return (
    <button
      onClick={() => signIn(provider.id)}
      key={provider.name}
      className={wrapper}
    >
      {renderSwitch(index)}
      <p className={wrapperName}>Zaloguj się z {provider.name}</p>
    </button>
  );
};

export default LoginButton;
