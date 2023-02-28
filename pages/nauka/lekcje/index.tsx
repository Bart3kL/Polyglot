import React from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { getPage } from "@/src/components/lib/contentful/client";
import useGet from "@/src/components/lib/axios/useGet";
import ErrorNoAccess from "@/src/components/atoms/ErrorNoAccess";
import LessonsPage from "@/src/components/organisms/LessonsPage";
import SciencePageLayout from "@/src/components/layout/SciencePageLayout";
const Lessons = () => {
  const { data: session }: any = useSession();

  if (!session) {
    return <ErrorNoAccess />;
  }
  return (
    <SciencePageLayout>
      <LessonsPage userId={session.user.id} />
    </SciencePageLayout>
  );
};

export default Lessons;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["lessons"], () => useGet("lessons"));
  await queryClient.prefetchQuery(["lessonsPage"], () => getPage("lessons"));
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
