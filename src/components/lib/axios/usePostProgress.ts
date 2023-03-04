import { useSession } from "next-auth/react";
import axios from "axios";
import useGet from "./useGet";
import { Progress } from "@/src/types/Science/utilityTypes";

const usePostProgress = () => {
  const { data } = useSession();

  const fetchWord = (progress: Progress) => {
    axios.post("/api/user-progress", progress);
  };

  const fetchLessonStep = async (lesson: string, lessonStep: string) => {
    const repetionsLength = await useGet("repetitions", data?.user.id);
    const flashcardsLength = await useGet("flashcards", data?.user.id);
    fetchWord({
      lesson,
      lessonStep,
      userId: data?.user.id,
      achievements: "false",
      lessonAchievement: Number(lesson) >= 2 ? "true" : "false",
      repeatsAchievement: flashcardsLength.length >= 10 ? "true" : "false",
      listeninglessonAchievement:
        repetionsLength.length >= 150 ? "true" : "false",
      noteslessonAchievement: Number(lesson) >= 3 ? "true" : "false",
      flashcardslessonAchievement:
        repetionsLength.length >= 30 ? "true" : "false",
      allLessonslessonAchievement:
        flashcardsLength.length >= 45 ? "true" : "false",
    });
  };

  return fetchLessonStep;
};

export default usePostProgress;
