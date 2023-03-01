import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { CustomReqQuery } from "@/src/types/Auth";

export default async function getAllLessons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    try {
      const { id } = req.query as unknown as CustomReqQuery;

      const repetitions = await prisma.repetitions.findMany();

      const repetitionsFilter = repetitions.filter(
        (repetition) => repetition.userId === id
      );
      // const sliced = repetitionsFilter.slice(0);
      // const sorted = sliced.sort(function (a: any, b: any) {
      //   return a.power - b.power;
      // });

      // const slicePerCent = sorted.slice(
      //   0,
      //   Math.ceil((sorted.length * 50) / 100)
      // );

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
