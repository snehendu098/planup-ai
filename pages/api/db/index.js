import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const handler = async (req, res) => {
  try {
    console.log(req.body.id);
    const users = await prisma.user.findUnique({ where: { id: req.body.id } });
    console.log(users);
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
