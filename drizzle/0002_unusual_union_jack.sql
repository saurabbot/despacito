CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(256) NOT NULL,
	"last_name" varchar(256) NOT NULL,
	"is_candidate" boolean,
	"is_employer" boolean,
	"email" varchar NOT NULL,
	"password" varchar(300),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
