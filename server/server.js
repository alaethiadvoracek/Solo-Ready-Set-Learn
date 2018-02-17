const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const abcRouter = require('./routes/abc.router');
const numberRouter = require('./routes/numbers.router');
const colorsRouter = require('./routes/colors.router');
const shapesRouter = require('./routes/shapes.router');
const gameRouter = require('./routes/game.router');

app.use(express.static('server/public/'));
app.use(bodyParser.json());

app.use('/alphabet', abcRouter);
app.use('/numbers', numberRouter);
app.use('/colors', colorsRouter);
app.use('/shapes', shapesRouter);
app.use('/shapes', gameRouter);

/** -----------START SERVER----------- */
app.set('port', process.env.PORT || 2000);
app.listen(app.get('port'), function() {
    console.log('Listening on Port: ', app.get('port'));
});