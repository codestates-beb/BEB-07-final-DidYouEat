import { prisma } from "../../prisma";

const getAllToken = async () => {
  try {
    const tokens = await prisma.token.findMany();

    return tokens;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { getAllToken };
