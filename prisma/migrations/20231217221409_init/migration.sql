-- CreateTable
CREATE TABLE "Page" (
    "_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "shape" TEXT NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Arrow" (
    "_id" SERIAL NOT NULL,
    "start" INTEGER NOT NULL,
    "end" INTEGER NOT NULL,

    CONSTRAINT "Arrow_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Configuration" (
    "pageId" TEXT NOT NULL,
    "position" JSONB NOT NULL,

    CONSTRAINT "Configuration_pkey" PRIMARY KEY ("pageId")
);
