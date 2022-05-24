/*
  Warnings:

  - Made the column `categoryId` on table `Thing` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Thing` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Thing" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Thing_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Thing" ("categoryId", "id", "name") SELECT "categoryId", "id", "name" FROM "Thing";
DROP TABLE "Thing";
ALTER TABLE "new_Thing" RENAME TO "Thing";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
