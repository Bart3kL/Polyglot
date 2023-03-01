import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function getAllLessons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  if (req.method === "GET") {
    try {
      const { wordid }: any = req.query;

      const flashcards = await prisma.flashcards.findMany();

      const filteredFlashcards = flashcards.filter(
        (repetition) => repetition.id === wordid
      );
      return filteredFlashcards
        ? res.send(filteredFlashcards)
        : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }

  if (req.method === "DELETE") {
    try {
      const { wordid }: any = req.query;
      const repetitions = await prisma.flashcards.delete({
        where: { id: wordid },
      });

      return repetitions ? res.send(repetitions) : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }

  if (req.method === "PATCH") {
    try {
      const { body: newData } = req;
      const flashcard = await prisma.flashcards.update({
        where: { id: newData.id },
        data: newData,
      });

      return flashcard ? res.send(flashcard) : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
  return;
}
