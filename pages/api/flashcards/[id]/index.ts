import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function getAllLessons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    try {
      const { id }: any = req.query;
      const flashcards = await prisma.flashcards.findMany();

      const flashcardsByUser = flashcards.filter(
        (flashcard) => flashcard.userId === id
      );

      return res.send(flashcardsByUser);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }

  if (req.method === "POST") {
    try {
      const { body: data } = req;

      const flashcard = await prisma.flashcards.create({ data });

      return res.status(201).send(flashcard);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }

  if (req.method === "PUT") {
    try {
      const { body: user } = req;

      const words = await prisma.words.findMany();

      const data = words.map((word) => ({
        id: word.name,
        userId: user.session,
        name: word.name,
        translation: word.translation,
        audio: word.audio,
        image: word.image,
        example1: word.example1,
        example2: word.example2,
        step: "0",
      }));
      const flashcard = data.map(
        async (data) =>
          await prisma.flashcards.upsert({
            where: {
              id: data.name,
            },
            update: data,
            create: data,
          })
      );

      return res.status(201).send(flashcard);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
  return;
}
