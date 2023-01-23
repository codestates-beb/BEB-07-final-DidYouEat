import { prisma } from "../../prisma";

const getAllUser = async () => {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { getAllUser };
