import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
export default async function getAllLessons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    try {
      const { body: data } = req;
      console.dir(data.userId);
      const repetitions = await prisma.repetitions.upsert({
        where: { id: data.id },
        update: {
          id: data.id,
          userId: data.userId,
          audio: data.audio,
          image: data.image,
          name: data.name,
          power: data.power,
          date: data.date,
          translation: data.translation,
        },
        create: {
          id: data.id,
          userId: data.userId,
          audio: data.audio,
          image: data.image,
          name: data.name,
          power: data.power,
          date: data.date,
          translation: data.translation,
        },
      });

      return res.status(201).send(repetitions);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
  return res.status(404).end();
}
