const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TradeSchema = new Schema({
    side: String,
    quantity: Number,
    price: Number,
    tradeDate: Date,
    status: String
});

const Trade = mongoose.model('Trade', TradeSchema, false);
module.exports.Trade = Trade;