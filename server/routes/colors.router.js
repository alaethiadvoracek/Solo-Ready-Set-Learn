const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

/* GET REQUESTS */
router.get('/', (req, res) => {
    const queryString = 'SELECT * FROM view_info JOIN images ON images.id = view_info.id WHERE images.id >= 37  ORDER BY images.id;';
    pool.query(queryString)
        .then(result => {
            console.log('Getting Colors info');
            res.send(result.rows);
        })
        .catch(err => {
            console.log('hit error on get', err);
            res.sendStatus(500);
        });

});


module.exports = router;