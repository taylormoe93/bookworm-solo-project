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
 * GET route for DETAIL VIEW
 */
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    const query = `SELECT * FROM book WHERE id = $1;`;
    pool.query(query, [req.params.id])
    .then(result => {
        console.log('CHECK THE SERVER SIDE',result.rows)
        res.send(result.rows);
    })
    .catch(error => {
        console.error('ERROR IN GET DETAIL in book.router.js', error);
        res.sendStatus(500)
    })
})

/**
 * POST route 
 */
// Req.body vs req.user?
// "book" or book?
// add "book read" and $5
router.post('/', (req, res) => {
    console.log(req.body);
    const insertBookQuery = `
   INSERT INTO "book" ("title", "author", "cover", "book_read")
VALUES ($1, $2, $3, $4) RETURNING "id", "title", "author", "cover", "book_read", "user_id", "genres_id";`

    const queryValues = [req.body.title, req.body.author, req.body.cover, req.body.book_read]

    pool.query(insertBookQuery, queryValues)
        .then(result => {
            res.sendStatus(201);
            console.log('New Book ID:', result.rows[0].id); // ID IS HERE
        const createBookId = result.rows[0].id // !!! <----- is this right?
        //Do we need genre stuff?
        }) .catch(error => {
            console.error('Error in book.router POST:',error);
            res.sendStatus(500)
        })
}) // end POST

router.put('/:id', (req,res) => {
    console.log('In PUT for update in book.router.js')
    const id = req.body.id
    const title = req.body.title
    const author = req.body.author
    const cover = req.body.cover
    const queryText = `
        UPDATE "book"
        SET "title" = $2, "author" = $3, "cover" = $4
        WHERE "id" = $1;`
    pool.query(queryText, [id, title, author, cover])
        .then(results => {
            res.sendStatus(200)
        }).catch(error => {
            console.error(error)
            res.sendStatus(500);
        })
})

/*
*Delete a book if it's something the logged in user added
*/ 
router.delete('/:id', (req, res) => {
    const queryText =  `DELETE FROM "book"
                        WHERE "id" = $1;`
    const queryValue = [req.params.id]
    pool.query(queryText, queryValue)
        .then( result => {
            res.sendStatus(204)
        }).catch( error => {
            console.error('ERROR IN DELETE ROUTER:', error)
            res.sendStatus(500)
        })
});



module.exports = router;