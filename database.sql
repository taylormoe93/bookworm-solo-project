
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "genres" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(80) NOT NULL
); 

CREATE TABLE "books" (
	"id" SERIAL PRIMARY KEY,
	"title" varchar(120) NOT NULL,
	"author" varchar(120) NOT NULL,
	"cover" varchar(350) NOT NULL,
	"notes" varchar(350) NOT NULL,
	"book_read" BOOLEAN NOT NULL,
	"user_id" INT REFERENCES "user",
	"genres_id" INT REFERENCES "genres"
); 

---- [DATA] ----
-- Genres values
INSERT INTO "genres" ("name")
VALUES
('Classics'),
('Literary'),
('Sci-fi'),
('Fantasy'),
('Mystery'),
('Romance'),
('Horror'),
('Non-fiction'),
('Poetry');
