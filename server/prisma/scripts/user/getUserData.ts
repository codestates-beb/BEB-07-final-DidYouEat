import { prisma } from '../../prisma';

const getUser = async (wallet_address: string) => {
  try {
    const userData = await prisma.user.findUnique({
      where: { wallet_address },
    });
    if (!userData) {
      return await prisma.user.create({
        data: { wallet_address, nickname: wallet_address },
      });
    } else return userData;
  } catch (e) {
    return null;
  }
};

const getTokensByWallet = async (wallet_address: string) => {
  try {
    const tokens = await prisma.token.findMany({
      where: { user_wallet_address: wallet_address },
    });
    return tokens;
  } catch (e) {
    return null;
  }
};

export { getUser, getTokensByWallet };
