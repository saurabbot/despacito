-- CreateTable
CREATE TABLE "Candidate" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "skills" TEXT[],
    "current_organisation" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "resume_url" TEXT NOT NULL,
    "skill_rating" JSONB NOT NULL,
    "previous_organisation_data" JSONB NOT NULL,
    "total_years_experience" INTEGER NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);
