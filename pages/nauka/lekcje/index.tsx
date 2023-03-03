import React from "react";
import { useSession } from "next-auth/react";
import BarLoader from "react-spinners/BarLoader";
import { getServerSession } from "next-auth/next";
import type { GetServerSidePropsContext } from "next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import ErrorNoAccess from "@/src/components/atoms/ErrorNoAccess";
import LessonsPage from "@/src/components/organisms/LessonsPage";
import SciencePageLayout from "@/src/components/layout/SciencePageLayout";
import { override } from "@/src/components/lib/spinner";
import useQueryLessonsPage from "@/src/components/lib/react-query/useQueryLessonsPage";
import { Header } from "@/src/types/Dictionary/utilityTypes";

const Lessons = ({ id }: any) => {
  const { data: session }: any = useSession();

  const { isLoading, lessons, page, userProgress } = useQueryLessonsPage(id);

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
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const data: any = await getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (data) {
    return {
      props: { id: data.user.id },
    };
  }
  return { props: {} };
};
