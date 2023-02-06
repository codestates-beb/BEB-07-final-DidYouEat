import { prisma } from 'prisma/prisma';

export const getTokenData = async (token_id: number) => {
  try {
    const tokenData = await prisma.token.findUnique({ where: { token_id } });
    return tokenData;
  } catch (e) {
    return null;
  }
};
