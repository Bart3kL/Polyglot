import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function getAllLessons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  if (req.method === "GET") {
    try {
      const dictionaryLevels = await prisma.dictonaryLevel.findMany();
      return res.send(dictionaryLevels);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
  return;
}
