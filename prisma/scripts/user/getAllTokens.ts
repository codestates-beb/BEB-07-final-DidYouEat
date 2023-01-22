import { prisma } from "../../prisma";

const getAllTokens = async (wallet_address: string) => {
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
};

export { getAllTokens };
