/*
  Warnings:

  - You are about to drop the column `shop_owner_id` on the `Collection` table. All the data in the column will be lost.

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
    "shop_name" TEXT NOT NULL,
    "owner_id" TEXT,
    CONSTRAINT "Collection_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Owner" ("owner_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Collection" ("collection_id", "coordinate_x", "coordinate_y", "created_at", "img_url", "minted", "owner_id", "shop_name") SELECT "collection_id", "coordinate_x", "coordinate_y", "created_at", "img_url", "minted", "owner_id", "shop_name" FROM "Collection";
DROP TABLE "Collection";
ALTER TABLE "new_Collection" RENAME TO "Collection";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
