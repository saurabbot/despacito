-- CreateTable
CREATE TABLE "ResetPasswordRequest" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "expiry" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResetPasswordRequest_pkey" PRIMARY KEY ("id")
);
