import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import format from "date-fns/format";

import { CustomReqQuery } from "@/src/types/Auth";

export default async function getAllLessons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  const today = String(format(new Date(), "yyyy-MM-dd"));

  if (req.method === "GET") {
    try {
      const { id } = req.query as unknown as CustomReqQuery;

      const repetitions = await prisma.repetitions.findMany();

      const repetitionsFilter = repetitions.filter(
        (repetition) => repetition.userId === id && repetition.date === today
      );

      return repetitionsFilter
        ? res.send(repetitionsFilter)
        : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }

  return res.status(404).end();
}
