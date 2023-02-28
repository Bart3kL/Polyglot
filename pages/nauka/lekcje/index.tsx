import React from "react";
import { useSession } from "next-auth/react";
import BarLoader from "react-spinners/BarLoader";

import ErrorNoAccess from "@/src/components/atoms/ErrorNoAccess";
import LessonsPage from "@/src/components/organisms/LessonsPage";
import SciencePageLayout from "@/src/components/layout/SciencePageLayout";
import { override } from "@/src/components/lib/spinner";
import useQuerySciencePage from "@/src/components/lib/react-query/useQuerySciencePage";
import { Header } from "@/src/types/Dictionary/utilityTypes";

const Lessons = () => {
  const { data: session }: any = useSession();

  const { isLoading, lessons, page, userProgress } = useQuerySciencePage(
    session.user.id
  );

  if (!session) {
    return <ErrorNoAccess />;
  }
  return (
    <SciencePageLayout>
      {isLoading ? (
        <BarLoader
          color={"#1f2233"}
          loading={isLoading}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <LessonsPage
          page={page as Header}
          lessons={lessons}
          userProgress={userProgress}
        />
      )}
    </SciencePageLayout>
  );
};

export default Lessons;
