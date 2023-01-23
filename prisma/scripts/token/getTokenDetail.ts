import { prisma } from "../../prisma";

const getTokenDetail = async (token_id: number) => {
  try {
    const token = await prisma.token.findUnique({
      where: {
        token_id,
      },
    });
    return token;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { getTokenDetail };
