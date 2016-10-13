var WebSocket = require('ws')


//var connection = new WebSocket('ws://echo.websocket.org/');
var connection = new WebSocket('ws://localhost:12345');

connection.onopen = function () {
    connection.send('Ping');
};

connection.onmessage = function (e) {
    console.log('Server: ' + e.data);
};


connection.on('open', function open() {
    var array = new Float32Array(5);

    for (var i = 0; i < array.length; ++i) {
        array[i] = i / 2;
    }

    connection.send(array, { binary: true, mask: true });
});