import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function getAllLessons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    try {
      const { wordId }: Partial<{ [key: string]: string | string[] }> =
        req.query;

      const repetitions = await prisma.repetitions.findMany();

      const repetitionsFiltered = repetitions.filter(
        (repetition) => repetition.id === wordId
      );
      return repetitionsFiltered
        ? res.send(repetitionsFiltered)
        : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }

  if (req.method === "DELETE") {
    try {
      const { wordId }: any = req.query;

      const repetitions = await prisma.repetitions.delete({
        where: { id: wordId },
      });

      return repetitions ? res.send(repetitions) : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }

  if (req.method === "POST") {
    try {
      // const { wordId }: any = req.query;
      const { body: data } = req;
      const repetitions = await prisma.repetitions.update({
        where: { id: data.id },
        data: {
          id: data.id,
          userId: data.userId,
          name: data.name,
          date: data.date,
          translation: data.translation,
          audio: data.audio,
          image: data.image,
          power: String(data.power),
        },
      });

      return repetitions ? res.send(repetitions) : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }

  return res.status(404).end();
}
