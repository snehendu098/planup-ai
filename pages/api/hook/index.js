import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
  try {
    await prisma.user.create({ data: { id: req.body.id } });

    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
