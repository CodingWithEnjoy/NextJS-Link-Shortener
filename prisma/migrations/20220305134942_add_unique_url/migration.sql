/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[linkId]` on the table `Link` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Link_url_key" ON "Link"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Link_linkId_key" ON "Link"("linkId");
