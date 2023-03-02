import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function getAllLessons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  if (req.method === "GET") {
    try {
      const { id }: any = req.query;
      const notes = await prisma.notebook.findMany();

      const notesByUser = notes.filter((notebook) => notebook.userId === id);

      return res.send(notesByUser);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }

  if (req.method === "POST") {
    try {
      const { body: dataa } = req;

      const randomId = Math.random() * 10000;
      const data = {
        id: String(randomId),
        userId: String(dataa.userId),
        subject: dataa.subject,
        notes: dataa.convertedText,
      };
      const notes = await prisma.notebook.create({ data });

      return res.status(201).send(notes);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
  return;
}
