import { collection } from 'src/dto/collection.dto';
import { prisma } from '../../prisma';

const createCollection = async (data: collection) => {
  const {
    collection_id,
    img_url,
    coordinate_x,
    coordinate_y,
    owner_id,
    shop_name,
    event,
  } = data;

  try {
    const newCollection = await prisma.collection.create({
      data: {
        collection_id,
        img_url,
        coordinate_x,
        coordinate_y,
        owner_id,
        shop_name,
      },
    });
    if (event) {
      const newEvent = await prisma.event.create({
        data: {
          content: event,
          collection_id,
        },
      });
      newCollection[event] = newEvent.id;
    }
    return newCollection;
  } catch (e) {
    return null;
  }
};

export { createCollection };
