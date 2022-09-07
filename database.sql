
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

CREATE TABLE "book" (
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

-- Default book
INSERT INTO "books" ("title", "author", "cover", "notes", "book_read")
VALUES
('Pride and Prejudice', 'Jane Austen', 'pride-and-prejudice-cover.jpg', 'The classic of Jane Austen', 'true')