import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function helper(req, res) {
  try {
    const { user } = await getSession(req, res);
    const id = user.sub.split("|")[1];
    const userData = await prisma.user.findUnique({ where: { id: id } });
    if (userData.points < 10)
      return res
        .status(400)
        .json({ msg: "You don't have enough points", success: false });
    const itinerary = await prisma.user.update({
      where: { id: id },
      data: {
        points: userData.points - 10,
        posts: {
          create: [
            {
              plan: req.body.plan,
              location: req.body.location,
              budget: req.body.budget,
              name: req.body.name,
            },
          ],
        },
      },
    });
    return res
      .status(200)
      .json({ msg: "Created", itinerary: itinerary, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error, success: false });
  }
}

export default withApiAuthRequired(helper);
