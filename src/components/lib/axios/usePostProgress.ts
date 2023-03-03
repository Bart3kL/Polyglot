import { useSession } from "next-auth/react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const usePostProgress = () => {
  const { data }: any = useSession();

  const fetchWord = (progress: any) => {
    try {
      axios.post("/api/user-progress", progress);
    } catch (e) {
      const err = e as AxiosError;
      toast.error(`⚔️ ${err.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: { top: "50px" },
      });
    }
  };
  const fetchLessonStep = async (lesson: string, lessonStep: string) => {
    fetchWord({
      lesson,
      lessonStep,
      userId: data.user.id,
      achievements: "false",
      lessonAchievement: "false",
      repeatsAchievement: "false",
      listeninglessonAchievement: "false",
      noteslessonAchievement: "false",
      flashcardslessonAchievement: "false",
      allLessonslessonAchievement: "false",
    });
  };

  return fetchLessonStep;
};

export default usePostProgress;
