import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req, res) => {
  const { user } = await getSession(req, res);
  try {
    const plan = await prisma.plan.findUnique({
      where: { id: req.body.id, userId: user.sub.split("|")[1] },
    });
    return res.status(200).json(plan);
  } catch (error) {
    console.log(error);
    return res.json({ msg: "Error Occurred", success: false });
  }
};

export default withApiAuthRequired(handler);
