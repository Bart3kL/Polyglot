import React from "react";
import { useRouter } from "next/router";

import NavigationMobile from "./NavigationMobile";
import Navigation from "./Navigation";

const NavBar = () => {
  const router = useRouter();
  return (
    <>
      {router.pathname === "/" ? (
        <>
          <Navigation />
          <NavigationMobile />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavBar;
