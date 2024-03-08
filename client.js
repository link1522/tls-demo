const tls = require('tls');
const fs = require('fs');

// 允許連線到不信任的 server (自簽憑證)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

// 進行 tls 連線
const client = tls.connect({
  host: 'localhost',
  port: 8080,
  key: fs.readFileSync('client-key.pem'),
  cert: fs.readFileSync('client-cert.pem')
});

client.on('connect', () => {
  console.log('Client connected to server');

  client.write('Hello, server!');
});

client.on('data', data => {
  console.log('Received data from server:', data.toString());
});

client.on('end', () => {
  console.log('Client disconnected from server');
});
