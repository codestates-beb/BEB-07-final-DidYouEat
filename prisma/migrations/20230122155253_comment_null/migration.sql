-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "token_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comment" TEXT,
    "user_wallet_address" TEXT,
    "collection_id" TEXT,
    CONSTRAINT "Item_user_wallet_address_fkey" FOREIGN KEY ("user_wallet_address") REFERENCES "User" ("wallet_address") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Item_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Collection" ("collection_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("collection_id", "comment", "created_at", "token_id", "user_wallet_address") SELECT "collection_id", "comment", "created_at", "token_id", "user_wallet_address" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
