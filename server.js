const tls = require('tls');
const fs = require('fs');

const server = tls.createServer({
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem')
  // 如果需要讓 socket 是顯示是被認證的 (socket.authorized)，需要加入以下
  // requestCert: true,
  // ca: [fs.readFileSync('client-cert.pem')]
});

server.on('secureConnection', socket => {
  console.log('Client connected');

  socket.on('data', data => {
    console.log('Received data from client:', data.toString());

    socket.write('Hello, client!');

    // 斷開 client 連線
    socket.end();
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
