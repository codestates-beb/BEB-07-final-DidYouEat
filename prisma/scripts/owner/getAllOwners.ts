import { prisma } from "../../prisma";

const getAllOwners = async () => {
  try {
    const owners = await prisma.owner.findMany();

    return owners;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { getAllOwners };
