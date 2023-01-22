import { prisma } from "../../prisma";

const changeNick = async (wallet_address: string, new_nick: string) => {
  const user = await prisma.user.update({
    where: {
      wallet_address,
    },
    data: {
      nickname: new_nick,
    },
  });

  return user;
};

export { changeNick };
