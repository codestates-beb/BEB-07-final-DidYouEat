import { prisma } from "../../prisma";

const createUser = async (wallet_address: string) => {
  const user = await prisma.user.create({
    data: {
      wallet_address,
      username: wallet_address,
    },
  });

  return user;
};

export { createUser };
