# tls connection demo

- The private keys on this repository are just for test in local environment. Don't worry.

## Get public key

`openssl genrsa -out server-key.pem 2048`

## Get private key

`openssl genrsa -out server-key.pem 2048`

## Get certificate (Sign by ourself)

`openssl req -new -key server-key.pem -x509 -days 365 -out server-cert.pem`
`
