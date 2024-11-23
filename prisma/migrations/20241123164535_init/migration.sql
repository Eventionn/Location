-- CreateTable
CREATE TABLE "Locations" (
    "locationId" UUID NOT NULL,
    "localtown" VARCHAR(20) NOT NULL,
    "city" VARCHAR(20) NOT NULL,

    CONSTRAINT "Locations_pkey" PRIMARY KEY ("locationId")
);
