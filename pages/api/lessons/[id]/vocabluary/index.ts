import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

import { CustomReqQuery } from "@/src/types/Auth";

const prisma = new PrismaClient();
export default async function getLessonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { id } = req.query as unknown as CustomReqQuery;
      const lesson = await prisma.lessons.findUnique({ where: { id } });

      const vocabulary = await prisma.vocabulary.findMany();
      const words = vocabulary.filter(
        (w) => w.vocabularyForLessonId === lesson?.id
      );

      return lesson ? res.send(words) : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
}
