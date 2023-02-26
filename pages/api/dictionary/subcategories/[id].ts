import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface CustomReqQuery {
  id: string;
}

const prisma = new PrismaClient();
export default async function getLessonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { id } = req.query as unknown as CustomReqQuery;

      const categories = await prisma.categoriesForDictionaryLevel.findUnique({
        where: { id },
      });
      const subcategories = await prisma.subcategory.findMany();

      const result = subcategories.filter(
        (subcategory) => subcategory.categoryId === categories?.id
      );

      return result ? res.send(result) : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
}
