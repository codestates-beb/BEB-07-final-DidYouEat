import { prisma } from "../../prisma";

const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { getAllUsers };
