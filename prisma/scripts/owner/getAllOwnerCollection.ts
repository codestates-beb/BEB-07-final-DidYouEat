import { prisma } from "../../prisma";

const getAllOwnerCollection = async (owner_id: string) => {
  const owner = await prisma.owner.findUnique({
    where: {
      owner_id,
    },
    include: {
      collections: true,
    },
  });
  if (owner) return owner.collections;
  else return [];
};

export { getAllOwnerCollection };
