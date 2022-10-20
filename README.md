# Bookworm

## Description

As an avid reader, I constantly add books to my to-be-read list. This list is usually a notepad on my phone. It can take months or years before you return to a title. By that point, the name of the book or author is often forgotten.

This is where Bookworm comes in.

Bookworm allows you to keep a book list with the name, author, genre, and a picture of the cover. Now you can look through your book list and have all the details you need to choose your next read.

Have fun keeping a book list, with Bookworm!

### Prerequisites

[Node.js](https://nodejs.org/en/)

## Installation

1. Fork the repository
2. Copy the SSH key in your new repository
3. In your terminal type: `git clone {paste SSH link}`
4. Navigate into the repository's folder in your terminal
5. Open VS Code (or editor of your choice) and open the folder
6. In the terminal of VS Code run `npm install` to install all dependencies
7. Create a `.env` file at the root of the project and paste this line into the file:
`SERVER_SESSION_SECRET=superDuperSecret`
8. Create a database named `prime_app` in PostgresSQL If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`
9. The queries in the database.sql file are set up to create all the necessary tables that you need, as well as a dummy data table to test the app. Copy and paste those queries in the SQL query of the database. 
10. Run `npm run server` in your VS Code terminal
11. Open a second terminal and run `npm run client`

## Usage
Once everything is installed and running it should open in your default browser - if not, navigate to `http://localhost:3000/#/`.

## Technologies used:

Node.js, React, Redux, Express, MUI, and PostgreSQL 

(a full list of dependencies can be found in `package.json`).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
