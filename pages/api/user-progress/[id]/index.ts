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

      const users = await prisma.users.findUnique({ where: { id } });
      return users ? res.send(users) : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }

  return res.status(404).end();
}
