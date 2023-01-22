import { prisma } from "../../prisma";

const getAllToken = async (wallet_address: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        wallet_address,
      },
      include: {
        items: true,
      },
    });

    if (user) return user.items;
    else return [];
  } catch (e) {
    console.log(e);
    return [];
  }
};

export { getAllToken };
