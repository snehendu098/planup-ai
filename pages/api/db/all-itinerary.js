import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const handler = async (req, res) => {
  try {
    const { user } = await getSession(req, res);
    const itinerary = await prisma.plan.findMany({
      where: { userId: user.sub.split("|")[1] },
    });
    return res.status(200).json({ itinerary, success: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Error Occurred", success: false });
  }
};

export default withApiAuthRequired(handler);
