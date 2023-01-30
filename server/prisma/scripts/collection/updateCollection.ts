import { collection } from 'src/api/dto/collection.dto';
import { prisma } from '../../prisma';

const updateCollection = async (data: collection) => {
  const {
    collection_id,
    img_url,
    created_at,
    coordinate_x,
    coordinate_y,
    owner_id,
    shop_name,
  } = data;

  try {
    const updateCollection = await prisma.collection.update({
      where: {
        collection_id,
      },
      data: {
        img_url,
        created_at,
        coordinate_x,
        coordinate_y,
        owner_id,
        shop_name,
      },
    });

    return updateCollection;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export { updateCollection };
