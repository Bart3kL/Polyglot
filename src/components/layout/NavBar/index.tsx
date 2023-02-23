import React from "react";
import { useRouter } from "next/router";

import NavigationMobile from "./NavigationMobile";

const NavBar = () => {
  const router = useRouter();
  return (
    <>
      {router.pathname === "/" ? (
        <>
          <NavigationMobile />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavBar;
