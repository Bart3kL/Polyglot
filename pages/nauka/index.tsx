import BarLoader from "react-spinners/BarLoader";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import type { GetServerSidePropsContext } from "next";

import useQueryData from "@/src/components/lib/react-query/useQuerySciencePage";
import SciencePageLayout from "@/src/components/layout/SciencePageLayout";
import { override } from "@/src/components/lib/spinner";
import ErrorNoAccess from "@/src/components/atoms/ErrorNoAccess";
import SciencePage from "@/src/components/organisms/SciencePage";
import { authOptions } from "../api/auth/[...nextauth]";
import { ScienceProps } from "@/src/types/Science";
import { ScienceHeader } from "@/src/types/Science/utilityTypes";

function Science({ id }: ScienceProps) {
  const { data: session }: any = useSession();
  const { isLoading, lessons, page, achievements, userProgress } =
    useQueryData(id);

  if (!session) {
    return <ErrorNoAccess />;
  }
  return (
    <SciencePageLayout>
      <>
        {isLoading ? (
          <BarLoader
            color={"#1f2233"}
            loading={isLoading}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <SciencePage
            userProgress={userProgress}
            achievements={achievements}
            page={page as ScienceHeader}
            lessons={lessons}
          />
        )}
      </>
    </SciencePageLayout>
  );
}

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
export default Science;
