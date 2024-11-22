-- CreateTable
CREATE TABLE "Locations" (
    "localtown" UUID NOT NULL,
    "city" VARCHAR(20) NOT NULL,

    CONSTRAINT "Locations_pkey" PRIMARY KEY ("localtown")
);
