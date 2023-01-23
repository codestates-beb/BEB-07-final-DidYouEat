import { prisma } from "../../prisma";

const getAllItem = async () => {
  try {
    const items = await prisma.item.findMany();

    return items;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { getAllItem };
