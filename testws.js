var WebSocket = require('ws')


var connection = new WebSocket('ws://echo.websocket.org/');
//var connection = new WebSocket('ws://10.130.196.68:8080/');

//connection.onopen = function () {
 //   connection.send('Ping');
//};

connection.on('open', function open() {
    var array = new Float32Array(5);

    for (var i = 0; i < array.length; ++i) {
        array[i] = i / 2;
    }

    connection.send(array, { binary: true, mask: true });
});


//connection.onmessage = function (e) {
//    console.log('Server: ' + e.data );
//};

connection.onmessage = function(e){
    var array2 = new Float32Array(5);
    array2 = e.data;

    for (var i=0; i<array2.length;i++){
        console.log(array2[i]);
    }
}