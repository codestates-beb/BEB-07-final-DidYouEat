import { prisma } from "../../prisma";

const getUser = async (wallet_address: string) => {
  const user = await prisma.user.findUnique({
    where: {
      wallet_address,
    },
  });

  return user;
};

export { getUser };
