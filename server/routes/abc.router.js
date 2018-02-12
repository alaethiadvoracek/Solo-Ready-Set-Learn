const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

/* GET REQUEST */
router.get('/alphabet', (req, res) => {
    const queryString = 'SELECT * FROM view_images WHERE "type"= letter';
    pool.query(queryString)
        .then(result => {
            console.log('Getting Alphabet info ');
            res.send(result.rows);
            console.log('did it get here');
        })
        .catch(err => {
            console.log('hit error of post');
            res.sendStatus(500);
        });

});

/* POST REQUESTS */


/* PUT REQUESTS */

module.exports = router;