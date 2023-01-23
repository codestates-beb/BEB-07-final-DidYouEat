import { prisma } from "../../prisma";

const getAllUserTokens = async (wallet_address: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        wallet_address,
      },
      include: {
        tokens: true,
      },
    });

    if (user) return user.tokens;
    else return [];
  } catch (e) {
    console.log(e);
    return [];
  }
};

export { getAllUserTokens };
