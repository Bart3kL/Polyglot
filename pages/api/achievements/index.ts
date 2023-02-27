import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function getAchievements(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    const achievements = await prisma.achievements.findMany();
    return res.send(achievements);
  }
  return;
}
