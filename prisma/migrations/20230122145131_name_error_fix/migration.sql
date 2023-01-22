/*
  Warnings:

  - The primary key for the `Collection` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `colelction_id` on the `Collection` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `Collection` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to drop the column `colelction_id` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `colelction_id` on the `Item` table. All the data in the column will be lost.
  - Added the required column `collection_id` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Collection" (
    "collection_id" TEXT NOT NULL PRIMARY KEY,
    "img_url" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "coordinate_x" INTEGER NOT NULL,
    "coordinate_y" INTEGER NOT NULL,
    "minted" INTEGER NOT NULL,
    "shop_owner_id" TEXT NOT NULL,
    "shop_name" TEXT NOT NULL,
    "owner_id" TEXT,
    CONSTRAINT "Collection_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Owner" ("owner_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Collection" ("coordinate_x", "coordinate_y", "created_at", "img_url", "minted", "owner_id", "shop_name", "shop_owner_id") SELECT "coordinate_x", "coordinate_y", "created_at", "img_url", "minted", "owner_id", "shop_name", "shop_owner_id" FROM "Collection";
DROP TABLE "Collection";
ALTER TABLE "new_Collection" RENAME TO "Collection";
CREATE TABLE "new_Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "collection_id" TEXT,
    CONSTRAINT "Event_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Collection" ("collection_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Event" ("collection_id", "content", "id") SELECT "collection_id", "content", "id" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
CREATE TABLE "new_Item" (
    "token_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comment" TEXT NOT NULL,
    "user_wallet_address" TEXT,
    "collection_id" TEXT,
    CONSTRAINT "Item_user_wallet_address_fkey" FOREIGN KEY ("user_wallet_address") REFERENCES "User" ("wallet_address") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Item_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Collection" ("collection_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("comment", "created_at", "token_id", "user_wallet_address") SELECT "comment", "created_at", "token_id", "user_wallet_address" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
