import { prisma } from "../../prisma";

const createUser = async (wallet_address: string) => {
  try {
    const user = await prisma.user.create({
      data: {
        wallet_address,
        nickname: wallet_address,
      },
    });

    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { createUser };
