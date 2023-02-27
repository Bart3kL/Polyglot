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

      return lesson ? res.send(lesson) : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }

  return;
}
