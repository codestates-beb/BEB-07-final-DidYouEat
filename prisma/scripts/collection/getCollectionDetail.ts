import { prisma } from "../../prisma";

const getCollectionDetail = async (collection_id: string) => {
  try {
    const collection = await prisma.collection.findUnique({
      where: {
        collection_id,
      },
    });
    return collection;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { getCollectionDetail };
