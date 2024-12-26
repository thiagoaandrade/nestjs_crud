-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "has_children" BOOLEAN NOT NULL,
    "is_employed" BOOLEAN NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
