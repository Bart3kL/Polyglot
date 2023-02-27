import { useSession } from "next-auth/react";
import axios from "axios";

const usePostProgress = () => {
  const { data }: any = useSession();

  const fetchWord = (progress: any) => {
    fetch("/api/user-progress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(progress),
    });
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
