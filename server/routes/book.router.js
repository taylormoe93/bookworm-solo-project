const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route 
 */
router.get('/', (req, res) => {
    console.log('GET books')
    const query = `SELECT * FROM book ORDER BY "title" ASC`;
    pool.query(query)
        .then( result => {
            console.log(result.rows);
            res.send( result.rows );
        })
        .catch( error => {
            console.error('ERROR in book.router.jsx GET:', error);
            res.sendStatus( 500 )
        })
}) // end GET

/**
 * POST route 
 */
// Req.body vs req.user?
// "book" or book?
router.post('/', (req, res) => {
    console.log(req.body);
    const insertBookQuery = `
    INSERT INTO book ("title", "author", "cover", "notes", "book_read")
    VALUES ($1, $2, $3, $4, $5)
    RETURN "id";`

    //QUERY MAKES A BOOK
    pool.query(insertBookQuery, [req.body.title, req.body.author, req.body.cover, req.body.notes, req.body.book_read])
        .then(result => {
            console.log('New Book ID:', result.rows[0].id); // ID IS HERE

        const createBookId = result.rows[0].id

        //Do we need genre stuff?

        }) .catch(error => {
            console.error(error);
            res.sendStatus(500)
        })
}) // end POST

module.exports = router;