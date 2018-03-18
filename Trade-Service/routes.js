const Trade = require('./models').Trade;
const express = require('express');
const router = express.Router();


router.use(function timeLog(req, res, next) {
    console.log("Time: ", Date.now());
    next();
});

// router param
router.param('tradeId', (req, res, next, id) => {
    Trade.findById(id, (err, doc) => {
      if (err) return next(err);
      if (!doc) {
        err = new Error('Document not found');
        err.status = 404;
        return next(err);
      }
      req.trade = doc;
      return next();
    });
  });

// router.use(())

router.get('/', (req, res, next) => {
    Trade.find({}).exec((err, trades) => {
        if (err) return next(err);
        res.json(trades);
    })
});

router.post('/', (req, res) => {
    const trade = new Trade(req.body);
    if(!trade) {
        throw "Cannot insert an invalid trade";
    }
    trade.save((err, trade) => {
        if (err) return next(err);
        res.status(201);
        res.json(trade);
    });
});

router.delete('/:tradeId', (req, res) => {
    req.trade.remove(err => {
      req.trade.save((err, trade) => {
        if (err) return next(err);
        res.json(trade);
      });
    });
  });

module.exports = router;