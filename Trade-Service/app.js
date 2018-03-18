const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');
const Trade = require('./trades/trade');
const enums = require('./trades/enums');
const Side = enums.side;
const TradeStatus = enums.tradeStatus;

const app = express();
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(`Error while connecting to Trades DB: ${err.message}`);
});

db.once('open', () => {
    console.log('Trades database connected');
})

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(bodyParser.json())
app.use('/trades', router);

mongoose.connect('mongodb://localhost:27017/Trade');



app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

const port = process.env.port || 3000;
app.listen(`${port}`, () => {
    const newTrade = new Trade(Side.BUY, 'b', 'c', 'd', TradeStatus.NOMINATED);
    
    console.log(`Server started at port ${port}`);
})