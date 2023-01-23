import { prisma } from "../../prisma";

const getItemDetail = async (token_id: number) => {
  try {
    const item = await prisma.item.findUnique({
      where: {
        token_id,
      },
    });
    return item;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { getItemDetail };
