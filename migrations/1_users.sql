CREATE TABLE "users" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "name" VARCHAR (255) NOT NULL,
  "email" VARCHAR (255) UNIQUE NOT NULL,
  "passwordhash" CHAR (60),
  "validated" BOOLEAN DEFAULT FALSE
)
