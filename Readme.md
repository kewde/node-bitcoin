# node-shadowcash
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

## Shadow
Shadow is a decentralized network built on the framework of Bitcoin. It provides free, uncensorable end-to-end encrypted messaging and also includes a more anonymous cryptocurrency named ShadowCash.

## Install and run daemon

You MUST have the shadowcoind daemon running, else your NodeJS app will return a connection error. Please for the sake of security do this on the same machine that the code will be running on. You can start the shadowcash daemon with the following command.

Linux:
`./shadowcoind -daemon`

Windows:
`shadowcoind.exe -daemon`

A **daemon** is a process that runs in the background after you've started it.

You can download Shadow's graphical interface and daemon for Ubuntu [here](https://shadowproject.io/en/gettingstarted).
We highly recommend building the daemon from source, this option works best for other linux flavours such as Debian. You can find detailed instructions [here](https://doc.shadowproject.io/#linux-daemon-from-source-shadowcoind)

For numerous security reasons you'll get an error when first running the shadowcoind daemon. The error will instruct you to create a shadowcoin.conf file in your corresponding directory:

OS | PATH
------------ | -------------
Windows | %appdata%\ShadowCoin
OSX  | ~/Library/Application Support/ShadowCoin/
Linux  | ~/.shadowcoin/

Create the file `shadowcoin.conf`, the linux command line instructions are:
```shell
cd ~/.shadowcoin/
nano shadowcoin.conf
```

and insert the following, make sure to change USERNAME and PASSWORD to something secure:
```json
server=1
rpcuser=USERNAME
rpcpassword=PASSWORD
```
## Install for NodeJS

`npm install shadowcash`

## API
The API is equivalent to the API document [here](https://doc.shadowproject.io/#json-rpc-api-reference).
The documentation on the website is not yet up to date (not all Bitcoin JSON RPC commands are valid), you're better off checking the actual client or in the file `/lib/commands.js`.

The methods are exposed as lower camelcase methods on the `shadowcash.Client`
object, or you may call the API directly using the `cmd` method.

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

### Get all unread messages
*Note:* Does not work with GUI wallet, it automatically marks the message as read. Use in combination with shadowcoind.
```js
  client.smsgInbox('unread', function(err, result, resHeaders) {
    if (err) return console.log(err);
    console.log(JSON.stringify(result));
    for(var i = 0; i < +result.result; i++){
        var sender = result.messages[i].from;
        var receiver = result.messages[i].to;
        var text = result.messages[i].text;
    
    }
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

