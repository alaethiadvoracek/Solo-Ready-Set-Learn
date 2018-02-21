const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

/* GET REQUEST */
router.get('/', (req, res) => {
    const queryString = 'SELECT * FROM view_images JOIN images ON images.id = view_images.id JOIN view_info ON view_info.id = view_images.view_id WHERE image_id >= 58 AND image_id <= 61 ORDER BY images.id';
    pool.query(queryString)
        .then(result => {
            console.log('Getting Game info');
            res.send(result.rows);
        })
        .catch(err => {
            console.log('hit error on get', err);
            res.sendStatus(500);
        });

});//end request for first line of game 

router.get('/more', (req, res) => {
    const queryString = 'SELECT * FROM images WHERE images.id >= 62 ORDER BY images.id';
    pool.query(queryString)
        .then(result => {
            console.log('Getting Game info');
            res.send(result.rows);
        })
        .catch(err => {
            console.log('hit error on get', err);
            res.sendStatus(500);
        });
});//end request for second line of game 









module.exports = router;