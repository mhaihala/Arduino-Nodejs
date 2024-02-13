import { createServer } from "http";
import { readFileSync } from "fs";
import socket from "socket.io";
import SerialPort from "serialport";


const index = readFileSync("index.html");

const parser = new SerialPort.parsers.Readline({
    delimiter: '\r\n'
});

const port = new SerialPort('COM5',{                  // Port Parameters
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

const app = createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

const io = socket.listen(app);

io.on('connection', function(data){

    console.log('Node.js is listening');            // When connected inform user

});

parser.on('data', function(data){

    console.log(data);                              // Read serialport and output to socket.io
    io.emit('data', data);

})

    

app.listen(3000);