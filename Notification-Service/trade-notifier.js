var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const Eureka = require('eureka-js-client').Eureka;

var Channel = require('./channel');

var queue = 'tradeQ';

app.get('/', (req, res) => {
    // res.sendStatus(200);
    res.send("hello");
});

// const client = new Eureka({
//     instance: {
//         app: 'NotificationService',
//         hostName: 'localhost',
//         ipAddr: '127.0.0.1',
//         instanceId: 'NotificationService',
//         port:  {
//             '$': 3456,
//             '@enabled': true,
//         },
//         vipAddress: 'NotificationService',
//         dataCenterInfo: {
//             '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
//             name: 'MyOwn'
//         }
//     },
//     eureka: {
//         host: 'localhost',
//         port: 8761,
//         servicePath: '/eureka/apps/',
//         fetchRegistry: true,
//         registerWithEureka: true
//     }
// })

// client.logger.level('debug');
// client.start((error) => {
//     console.log(error || 'complete');
// })

Channel(queue, (err, channel, conn) => {
    if(err) {
        console.log(err.stack);
    }
    else {
        console.log('channel and queue created');

        consume();
    }

    function consume() {
        channel.get(queue, {}, onConsume);

        function onConsume(err, msg) {
            if(err) {
                console.warn(err.message);
            }
            else if(msg) {
                console.log('consuming %j', msg.content.toString());
                io.emit('tradeEvt', msg.content.toString());
                setTimeout( function() {
                    channel.ack(msg);
                    consume();
                }, 1e3);
            }
            else {
                console.log('no message, waiting...');
                setTimeout(consume, 1e3);
            }
        }
    }
})

io.on('connection', (socket) => {
    console.log('app connected');
})

http.listen(3456, () => {
    console.log('listening on *: 3456');
})