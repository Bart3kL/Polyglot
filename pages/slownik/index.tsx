import { useQuery } from "@tanstack/react-query";
import BarLoader from "react-spinners/BarLoader";
import { useSession } from "next-auth/react";

import { getPage } from "@/src/components/lib/contentful/client";
import useGetDictionary from "@/src/components/lib/axios/useGetDictionary";
import { Header } from "@/src/types/Dictionary/utilityTypes";
import DictionaryPage from "@/src/components/organisms/DictionaryPage";
import { override } from "@/src/components/lib/spinner";
import usePostProgress from "@/src/components/lib/axios/usePostProgress";
import useGet from "@/src/components/lib/axios/useGet";

function Dictionary() {
  const { data: session } = useSession();
  const { data: levels, isLoading: loadingLevels } = useQuery({
    queryKey: ["levels"],
    queryFn: () => useGetDictionary(),
  });
  const { data: page, isLoading: loadingHomePage } = useQuery({
    queryKey: ["homePage"],
    queryFn: () => getPage("dictionary"),
  });
  const fetchLessonStep = usePostProgress();

  const handleUserProgress = async () => {
    if (session) {
      const users = await useGet("check-user");
      const foundAccount = users.some(
        (user: any) => user.id === session.user.id
      );

      if (!foundAccount) {
        fetchLessonStep("1", "1");
      }
    }
  };
  const isLoading = loadingHomePage || loadingLevels;
  handleUserProgress();
  return (
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
        <DictionaryPage page={page as Header} levels={levels} />
      )}
    </>
  );
}
export default Dictionary;
