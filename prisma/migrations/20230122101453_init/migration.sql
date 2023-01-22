-- CreateTable
CREATE TABLE "Item" (
    "token_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL,
    "comment" TEXT NOT NULL,
    "userWallet_address" TEXT,
    "Colelction_id" TEXT,
    CONSTRAINT "Item_userWallet_address_fkey" FOREIGN KEY ("userWallet_address") REFERENCES "User" ("wallet_address") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Item_Colelction_id_fkey" FOREIGN KEY ("Colelction_id") REFERENCES "Collection" ("colelction_id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "wallet_address" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Owner" (
    "owner_id" TEXT NOT NULL PRIMARY KEY,
    "owner_pw" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Collection" (
    "colelction_id" TEXT NOT NULL PRIMARY KEY,
    "img_url" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "coordinate_x" INTEGER NOT NULL,
    "coordinate_y" INTEGER NOT NULL,
    "minted" INTEGER NOT NULL,
    "shop_owner_id" TEXT NOT NULL,
    "shop_name" TEXT NOT NULL,
    "Owner_id" TEXT,
    CONSTRAINT "Collection_Owner_id_fkey" FOREIGN KEY ("Owner_id") REFERENCES "Owner" ("owner_id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "collection_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "Colelction_id" TEXT,
    CONSTRAINT "Event_Colelction_id_fkey" FOREIGN KEY ("Colelction_id") REFERENCES "Collection" ("colelction_id") ON DELETE SET NULL ON UPDATE CASCADE
);
