
const channel = require('./channel');

const q = 'tradeQ';

publishTradeMsg = (msg) => {
    channel(q, (err, channel, conn) => {
        if(err) {
            console.log(err.stack);
        }
        else {
            console.log('trade queue created');

            var tradeMsg = msg;
            channel.sendToQueue(q, encode(tradeMsg), {persistent: true});

            setImmediate(() => {
                channel.close();
                conn.close()
            })
        }
    })
}

function encode(doc){
    return new Buffer(JSON.stringify(doc));
}

module.exports = publishTradeMsg;