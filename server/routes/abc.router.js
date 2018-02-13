const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

/* GET REQUESTS */
router.get('/', (req, res) => {
    const queryString = 'SELECT * FROM view_images';
    pool.query(queryString)
        .then(result => {
            console.log('Getting Alphabet info');
            res.send(result.rows);
        })
        .catch(err => {
            console.log('hit error on get', err);
            res.sendStatus(500);
        });

});

/* POST REQUESTS */
// router.post('/', (req, res) => {
//     for(let i = 0; i < result.length; i++)
//     .then(result => {
//         console.log('Posting Alphabet info');
//         res.send(result.rows);
//     })
//     .catch(err => {
//         console.log('hit error on post', err);
//         res.sendStatus(500);
//     });
// })

/* PUT REQUESTS */

module.exports = router;