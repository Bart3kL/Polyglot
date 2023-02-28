import React from "react";
import { useSession } from "next-auth/react";

import { ScienceWelcomeBoxProps } from "@/src/types/Science/ScienceWelcomeBox";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const ScienceWelcomeBox = ({ welcomeMessage }: ScienceWelcomeBoxProps) => {
  const { data: session } = useSession();

  return (
    <div className={wrapper}>
      <h2>
        {welcomeMessage} {session?.user?.name}
      </h2>
      <p id="welcomeBox">Dzisiaj wykonałeś 42 powtórki</p>
    </div>
  );
};

export default ScienceWelcomeBox;
