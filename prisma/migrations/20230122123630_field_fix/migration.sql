/*
  Warnings:

  - You are about to drop the column `Colelction_id` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `userWallet_address` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `Owner_id` on the `Collection` table. All the data in the column will be lost.
  - You are about to drop the column `Colelction_id` on the `Event` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "token_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL,
    "comment" TEXT NOT NULL,
    "user_wallet_address" TEXT,
    "colelction_id" TEXT,
    CONSTRAINT "Item_user_wallet_address_fkey" FOREIGN KEY ("user_wallet_address") REFERENCES "User" ("wallet_address") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Item_colelction_id_fkey" FOREIGN KEY ("colelction_id") REFERENCES "Collection" ("colelction_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("comment", "created_at", "token_id") SELECT "comment", "created_at", "token_id" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE TABLE "new_Collection" (
    "colelction_id" TEXT NOT NULL PRIMARY KEY,
    "img_url" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "coordinate_x" INTEGER NOT NULL,
    "coordinate_y" INTEGER NOT NULL,
    "minted" INTEGER NOT NULL,
    "shop_owner_id" TEXT NOT NULL,
    "shop_name" TEXT NOT NULL,
    "owner_id" TEXT,
    CONSTRAINT "Collection_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Owner" ("owner_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Collection" ("colelction_id", "coordinate_x", "coordinate_y", "created_at", "img_url", "minted", "shop_name", "shop_owner_id") SELECT "colelction_id", "coordinate_x", "coordinate_y", "created_at", "img_url", "minted", "shop_name", "shop_owner_id" FROM "Collection";
DROP TABLE "Collection";
ALTER TABLE "new_Collection" RENAME TO "Collection";
CREATE TABLE "new_Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "collection_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "colelction_id" TEXT,
    CONSTRAINT "Event_colelction_id_fkey" FOREIGN KEY ("colelction_id") REFERENCES "Collection" ("colelction_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Event" ("collection_id", "content", "id") SELECT "collection_id", "content", "id" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
