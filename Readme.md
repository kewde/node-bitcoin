# node-shadowcash
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

[travis-image]: https://travis-ci.org/kewde/node-shadowcash.svg?branch=master
[travis-url]: https://travis-ci.org/kewde/node-shadowcash

[npm-image]: https://img.shields.io/npm/v/shadowcash.svg?style=flat
[npm-url]: https://npmjs.org/package/shadowcash

[downloads-image]: https://img.shields.io/npm/dm/shadowcash.svg?style=flat
[downloads-url]: https://npmjs.org/package/shadowcash

[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: http://standardjs.com

node-shadowcash is a simple wrapper for the Shadowcash client's JSON-RPC API.


The API is equivalent to the API document [here](https://doc.shadowproject.io/#json-rpc-api-reference).
The methods are exposed as lower camelcase methods on the `shadowcash.Client`
object, or you may call the API directly using the `cmd` method.

## Install

`npm install shadowcash`

## Examples

### Create client
```js
// all config options are optional
var client = new shadowcash.Client({
  host: 'localhost',
  port: 51736,
  user: 'username',
  pass: 'password',
  timeout: 30000
});
```

### Get balance across all accounts with minimum confirmations of 6

```js
client.getBalance('*', 6, function(err, balance, resHeaders) {
  if (err) return console.log(err);
  console.log('Balance:', balance);
});
```
### Getting the balance directly using `cmd`

```js
client.cmd('getbalance', '*', 6, function(err, balance, resHeaders){
  if (err) return console.log(err);
  console.log('Balance:', balance);
});
```

### Batch multiple RPC calls into single HTTP request

```js
var batch = [];
for (var i = 0; i < 10; ++i) {
  batch.push({
    method: 'getnewaddress',
    params: ['myaccount']
  });
}
client.cmd(batch, function(err, address, resHeaders) {
  if (err) return console.log(err);
  console.log('Address:', address);
});
```

