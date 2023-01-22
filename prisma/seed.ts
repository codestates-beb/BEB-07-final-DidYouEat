import { prisma } from "./prisma";

async function userSeed() {
  await prisma.user.deleteMany({});
  await prisma.user.create({
    data: {
      wallet_address: "0xd05873F2E169829901dB479FA16aa52673a6DDd5",
      username: "user1",
    },
  });
  await prisma.user.create({
    data: {
      wallet_address: "0x28E5f0F592B43B3dCE2536Fc2f7eaD7F82466842",
      username: "0x28E5f0F592B43B3dCE2536Fc2f7eaD7F82466842",
    },
  });
  await prisma.user.create({
    data: {
      wallet_address: "0xe351c0d1e6818adEC7b5db725dB3a9b18Edcd24A",
      username: "user3",
    },
  });
  await prisma.user.create({
    data: {
      wallet_address: "0x6d2b77eF75ED55BdA240f7F9Ba29D1aEfDdF9A9b",
      username: "user4",
    },
  });
  await prisma.user.create({
    data: {
      wallet_address: "0x447093C80C28671BdB7F45719b1940adF9Db8199",
      username: "0x447093C80C28671BdB7F45719b1940adF9Db8199",
    },
  });
}

async function ownerSeed() {
  await prisma.owner.deleteMany({});

  await prisma.owner.create({
    data: {
      owner_id: "fire",
      owner_pw: "abc123",
    },
  });
  await prisma.owner.create({
    data: {
      owner_id: "water",
      owner_pw: "def123",
    },
  });
  await prisma.owner.create({
    data: {
      owner_id: "gold",
      owner_pw: "ghi123",
    },
  });
  await prisma.owner.create({
    data: {
      owner_id: "wood",
      owner_pw: "jkl123",
    },
  });
}

async function collectionSeed() {
  await prisma.collection.deleteMany({});

  await prisma.collection.create({
    data: {
      collection_id: "collection1",
      img_url: "http://test1",
      coordinate_x: 135,
      coordinate_y: 178,
      minted: 3,
      shop_name: "fire_shop1",
      owner_id: "fire",
    },
  });

  await prisma.collection.create({
    data: {
      collection_id: "collection2",
      img_url: "http://test2",
      coordinate_x: 23,
      coordinate_y: 168,
      minted: 1,
      shop_name: "fire_shop2",
      owner_id: "fire",
    },
  });

  await prisma.collection.create({
    data: {
      collection_id: "collection3",
      img_url: "http://test3",
      coordinate_x: 49,
      coordinate_y: 81,
      minted: 2,
      shop_name: "water_shop1",
      owner_id: "water",
    },
  });

  await prisma.collection.create({
    data: {
      collection_id: "collection4",
      img_url: "http://test4",
      coordinate_x: 214,
      coordinate_y: 50,
      minted: 1,
      shop_name: "gold_shop1",
      owner_id: "gold",
    },
  });

  await prisma.collection.create({
    data: {
      collection_id: "collection5",
      img_url: "http://test5",
      coordinate_x: 12,
      coordinate_y: 96,
      minted: 4,
      shop_name: "gold_shop2",
      owner_id: "gold",
    },
  });

  await prisma.collection.create({
    data: {
      collection_id: "collection6",
      img_url: "http://test6",
      coordinate_x: 234,
      coordinate_y: 43,
      minted: 2,
      shop_name: "wood_shop1",
      owner_id: "wood",
    },
  });
}

async function itemSeed() {
  await prisma.item.deleteMany({});

  await prisma.item.create({
    data: {
      token_id: 1,
      comment: "taste good",
      user_wallet_address: "0xd05873F2E169829901dB479FA16aa52673a6DDd5",
      collection_id: "collection1",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 2,
      user_wallet_address: "0xe351c0d1e6818adEC7b5db725dB3a9b18Edcd24A",
      collection_id: "collection1",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 3,
      user_wallet_address: "0xe351c0d1e6818adEC7b5db725dB3a9b18Edcd24A",
      collection_id: "collection1",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 4,
      user_wallet_address: "0xd05873F2E169829901dB479FA16aa52673a6DDd5",
      collection_id: "collection2",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 5,
      user_wallet_address: "0x6d2b77eF75ED55BdA240f7F9Ba29D1aEfDdF9A9b",
      collection_id: "collection2",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 6,
      user_wallet_address: "0x447093C80C28671BdB7F45719b1940adF9Db8199",
      collection_id: "collection2",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 7,
      user_wallet_address: "0xd05873F2E169829901dB479FA16aa52673a6DDd5",
      collection_id: "collection2",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 8,
      user_wallet_address: "0x6d2b77eF75ED55BdA240f7F9Ba29D1aEfDdF9A9b",
      collection_id: "collection2",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 9,
      user_wallet_address: "0x447093C80C28671BdB7F45719b1940adF9Db8199",
      collection_id: "collection3",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 10,
      user_wallet_address: "0x447093C80C28671BdB7F45719b1940adF9Db8199",
      collection_id: "collection4",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 11,
      user_wallet_address: "0xd05873F2E169829901dB479FA16aa52673a6DDd5",
      collection_id: "collection4",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 12,
      user_wallet_address: "0x6d2b77eF75ED55BdA240f7F9Ba29D1aEfDdF9A9b",
      collection_id: "collection5",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 13,
      user_wallet_address: "0xe351c0d1e6818adEC7b5db725dB3a9b18Edcd24A",
      collection_id: "collection5",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 14,
      user_wallet_address: "0xd05873F2E169829901dB479FA16aa52673a6DDd5",
      collection_id: "collection5",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 15,
      user_wallet_address: "0xd05873F2E169829901dB479FA16aa52673a6DDd5",
      collection_id: "collection5",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 16,
      user_wallet_address: "0x447093C80C28671BdB7F45719b1940adF9Db8199",
      collection_id: "collection5",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 17,
      user_wallet_address: "0x28E5f0F592B43B3dCE2536Fc2f7eaD7F82466842",
      collection_id: "collection5",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 18,
      user_wallet_address: "0xd05873F2E169829901dB479FA16aa52673a6DDd5",
      collection_id: "collection5",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 19,
      user_wallet_address: "0x447093C80C28671BdB7F45719b1940adF9Db8199",
      collection_id: "collection5",
    },
  });

  await prisma.item.create({
    data: {
      token_id: 20,
      user_wallet_address: "0xe351c0d1e6818adEC7b5db725dB3a9b18Edcd24A",
      collection_id: "collection6",
    },
  });
}

async function main() {
  await userSeed();
  await ownerSeed();
  await collectionSeed();
  await itemSeed();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
