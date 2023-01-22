import { prisma } from "../../prisma";

const changeNick = async (wallet_address: string, new_nick: string) => {
  try {
    const user = await prisma.user.update({
      where: {
        wallet_address,
      },
      data: {
        nickname: new_nick,
      },
    });

    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { changeNick };
