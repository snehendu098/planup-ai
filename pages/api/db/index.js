import { prisma } from "../../../helper/otherHelpers";

const handler = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
