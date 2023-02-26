import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
export default async function getLessonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const words = await prisma.words.findMany();

      return words ? res.send(words) : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
}
