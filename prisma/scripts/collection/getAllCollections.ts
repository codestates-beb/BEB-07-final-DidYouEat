import { prisma } from "../../prisma";

const getAllCollections = async () => {
  try {
    const collections = await prisma.collection.findMany();

    return collections;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { getAllCollections };
