import React from "react";
import { useSession } from "next-auth/react";
import BarLoader from "react-spinners/BarLoader";
import { useQuery } from "@tanstack/react-query";
import { getServerSession } from "next-auth/next";
import type { GetServerSidePropsContext } from "next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import SciencePageLayout from "@/src/components/layout/SciencePageLayout";
import { override } from "@/src/components/lib/spinner";
import useGet from "@/src/components/lib/axios/useGet";
import ErrorNoAccess from "@/src/components/atoms/ErrorNoAccess";
import LessonSinglePage from "@/src/components/organisms/LessonSinglePage";
import useGetUserProgress from "@/src/components/lib/axios/useGetUserProgress";
import { LessonSingleProps } from "@/src/types/LessonSingle";
import { SessionType } from "@/src/types/Auth";

const LessonSingle = ({ id, userId }: LessonSingleProps) => {
  const { data: session } = useSession();

  const { data: lesson, isLoading: loadingSingleLessonPage } = useQuery({
    queryKey: ["singleLessonPage", id],
    queryFn: () => useGet("lessons", id),
  });
  const { data: userProgress, isLoading: loadingUserProgress } = useQuery({
    queryKey: ["userProgress"],
    queryFn: () => useGetUserProgress(userId),
  });

  const isLoading = loadingUserProgress || loadingSingleLessonPage;
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
        <LessonSinglePage lesson={lesson} id={id} userProgress={userProgress} />
      )}
    </SciencePageLayout>
  );
};

export default LessonSingle;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params?.id as string;

  const data: SessionType = await getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (data) {
    return {
      props: { userId: data.user.id, id },
    };
  }
  return { props: {} };
};
