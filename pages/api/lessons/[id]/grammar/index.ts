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

      const grammar = await prisma.grammar.findMany();
      const words = grammar.filter((w) => w.grammarForLessonId === lesson?.id);

      return lesson ? res.send(words) : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
}
