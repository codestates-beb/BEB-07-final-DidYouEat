import { prisma } from "../../prisma";

const changeNick = async (wallet_address: string, nickname: string) => {
  try {
    const user = await prisma.user.update({
      where: {
        wallet_address,
      },
      data: {
        nickname,
      },
    });

    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { changeNick };
