import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function getAllLessons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    const usersStats = await prisma.users.findMany();
    const usersDetails = await prisma.user.findMany();
    const usersFlashcards = await prisma.flashcards.findMany();
    const usersRepetitions = await prisma.repetitions.findMany();

    const data = usersStats.map((user) => {
      const userDetails = usersDetails.map(
        (userr) =>
          user.id === userr.id && {
            id: user.id,
            lesson: user.lesson,
            name: userr.name,
            image: userr.image,
            achievements: [
              user.lessonAchievement,
              user.repeatsAchievement,
              user.listeninglessonAchievement,
              user.noteslessonAchievement,
              user.flashcardslessonAchievement,
              user.allLessonslessonAchievement,
            ],
          }
      );
      const usersFlashcard = usersFlashcards.filter(
        (userrr) => user.id === userrr.userId && { word: userrr.id }
      );
      const flashcardsLength = usersFlashcard.length;
      const repetitions = usersRepetitions.filter(
        (userrrr) => user.id === userrrr.userId && { word: userrrr.id }
      );

      const repetitionsLength = repetitions.length;

      return { userDetails, flashcardsLength, repetitionsLength };
    });

    return res.send(data);
  }

  return;
}
