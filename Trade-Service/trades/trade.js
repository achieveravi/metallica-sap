class Trade {
    
    constructor(side, quantity, price, tradeDate, status) {
        this.side = side;
        this.quantity = quantity;
        this.price = price;
        this.tradeDate = tradeDate;
        this.status = status;
    }

}

module.exports = Trade;
