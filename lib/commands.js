module.exports = {
  addMultiSigAddress: 'addmultisigaddress',
  addNode: 'addnode', // bitcoind v0.8.0+
  addRedeemScript: 'addredeemscript', // ShadowCash
  anonInfo: 'anoninfo', // ShadowCash
  anonOutputs: 'anonoutputs',
  backupWallet: 'backupwallet',
  checkKernel: 'checkkernel', // ShadowCash - PoS
  checkWallet: 'checkwallet',
  createMultiSig: 'createmultisig',
  createRawTransaction: 'createrawtransaction', // bitcoind v0.7.0+
  decodeRawTransaction: 'decoderawtransaction', // bitcoind v0.7.0+
  decodeScript: 'decodescript',
  dumpPrivKey: 'dumpprivkey',
  dumpWallet: 'dumpwallet', // bitcoind v0.9.0+
  encryptWallet: 'encryptwallet',
  estimateAnonFee: 'estimateanonfee', // ShadowCash
  // estimateFee: 'estimatefee', // bitcoind v0.10.0x Not in ShadowCash
  // estimatePriority: 'estimatepriority', // bitcoind v0.10.0+
  extKey: 'extkey', // ShadowCash - HD wallet
  generate: 'generate', // bitcoind v0.11.0+
  getAccount: 'getaccount',
  getAccountAddress: 'getaccountaddress',
  getAddedNodeInfo: 'getaddednodeinfo', // bitcoind v0.8.0+
  getAddressesByAccount: 'getaddressesbyaccount',
  getBalance: 'getbalance',
  getBestBlockHash: 'getbestblockhash', // bitcoind v0.9.0+
  getBlock: 'getblock',
  getBlockchainInfo: 'getblockchaininfo', // bitcoind v0.9.2+
  getBlockCount: 'getblockcount',
  getBlockHash: 'getblockhash',
  getBlockTemplate: 'getblocktemplate', // bitcoind v0.7.0+
  //getChainTips: 'getchaintips', // bitcoind v0.10.0+
  getConnectionCount: 'getconnectioncount',
  getDifficulty: 'getdifficulty',
  getGenerate: 'getgenerate',
  getInfo: 'getinfo',
  // getMempoolInfo: 'getmempoolinfo', // bitcoind v0.10+
  getMiningInfo: 'getmininginfo',
  getNetTotals: 'getnettotals',
  getNetworkInfo: 'getnetworkinfo', // bitcoind v0.9.2+
  getNetworkHashPs: 'getnetworkhashps', // bitcoind v0.9.0+
  getNewAddress: 'getnewaddress',
  getNewExtAddress: 'getnewextaddress', // SHADOWCASH 
  getNewPubKey: 'getnewpubkey', // SHADOWCASH
  getNewStealthAddress: 'getnewstealthaddress', // SHADOWCASH
  getPeerInfo: 'getpeerinfo', // bitcoind v0.7.0+
  //getRawChangeAddress: 'getrawchangeaddress', // bitcoin v0.9+
  getRawMemPool: 'getrawmempool', // bitcoind v0.7.0+
  getRawTransaction: 'getrawtransaction', // bitcoind v0.7.0+
  getReceivedByAccount: 'getreceivedbyaccount',
  getReceivedByAddress: 'getreceivedbyaddress',
  getStakeSubsidy: 'getstakesubsidy', // ShadowCash - PoS
  getStakingInfo : 'getstakinginfo', // ShadowCash - PoS
  getSubsidy: 'getsubsidy', // ShadowCash - PoS
  getTransaction: 'gettransaction',
  // getTxOut: 'gettxout', // bitcoind v0.7.0+
  // getTxOutProof: 'gettxoutproof', // bitcoind v0.11.0+
  // getTxOutSetInfo: 'gettxoutsetinfo', // bitcoind v0.7.0+
  // getUnconfirmedBalance: 'getunconfirmedbalance', // bitcoind v0.9.0+
  // getWalletInfo: 'getwalletinfo', // bitcoind v0.9.2+
  getWork: 'getwork', // SHADOWCASH - OLD bitcoin feature
  getWorkEx: 'getworkex', // SHADOWCASH - OLD bitcoin feature
  help: 'help',
  // importAddress: 'importaddress', // bitcoind v0.10.0+
  importPrivKey: 'importprivkey',
  importStealthAddress: 'importstealthaddress', // SHADOWCASH
  importWallet: 'importwallet', // bitcoind v0.9.0+
  keypoolRefill: 'keypoolrefill',
  listAccounts: 'listaccounts',
  listAddressGroupings: 'listaddressgroupings', // bitcoind v0.7.0+
  // listLockUnspent: 'listlockunspent', // bitcoind v0.8.0+
  listReceivedByAccount: 'listreceivedbyaccount',
  listReceivedByAddress: 'listreceivedbyaddress',
  listSinceBlock: 'listsinceblock',
  listStealthAddresses: 'liststealthaddresses', // SHADOWCASH
  listTransactions: 'listtransactions',
  listUnspent: 'listunspent', // bitcoind v0.7.0+
  // lockUnspent: 'lockunspent', // bitcoind v0.8.0+
  makeKeyPair: 'makekeypair', // ShadowCash
  move: 'move',
  nextOrphan: 'nextorphan',
  ping: 'ping', // bitcoind v0.9.0+
  // prioritiseTransaction: 'prioritisetransaction', // bitcoind v0.10.0+
  reloadAnonData: 'reloadanondata', // ShadowCash
  repairWallet: 'repairwallet', // ShadowCash
  reSendTx: 'resendtx', // ShadowCash
  reserveBalance: 'reservebalance', // ShadowCash
  rewindChain: 'rewindchain', // ShadowCash
  scanforalltxns: 'scanforalltxns', // ShadowCash
  scanForStealthTxns: 'scanforstealthtxns', // ShadowCash
  sendAlert: 'sendalert', // ShadowCash
  sendAnonToAnon: 'sendanontoanon', // ShadowCash
  sendAnonToSdc: 'sendanontosdc',// ShadowCash
  sendFrom: 'sendfrom',
  sendMany: 'sendmany',
  sendRawTransaction: 'sendrawtransaction', // bitcoind v0.7.0+
  sendSdcToAnon : 'sendsdctoanon', // ShadowCash
  sendToAddress: 'sendtoaddress',
  sendToStealthAddress: 'sendtostealthaddress', // ShadowCash
  setAccount: 'setaccount',
  // setGenerate: 'setgenerate',
  setBestBlockByHeight: 'setbestblockbyheight', // ShadowCash
  setTxFee: 'settxfee',
  signMessage: 'signmessage',
  signRawTransaction: 'signrawtransaction', // bitcoind v0.7.0+
  stop: 'stop',
  submitBlock: 'submitblock', // bitcoind v0.7.0+
  validateAddress: 'validateaddress',
  validatePubKey: 'validatepubkey',
  verifyChain: 'verifychain', // bitcoind v0.9.0+
  verifyMessage: 'verifymessage',
  // verifyTxOutProof: 'verifytxoutproof', // bitcoind v0.11.0+
  // walletLock: 'walletlock',
  // walletPassphrase: 'walletpassphrase',
  // walletPassphraseChange: 'walletpassphrasechange',
  smsgAddKey: 'smsgaddkey', // --- SHADOWCASH MESSAGING API ---
  smsgBuckets: 'smsgbuckets',
  smsgDisable: 'smsgdisable',
  smsgEnable: 'smsgenable',
  smsgGetPubKey: 'smsggetpubkey',
  smsgInbox: 'smsginbox', 
  smsgLocalKeys: 'smsglocalkeys',
  smsgOptions: 'smsgoptions',
  smsgOutbox: 'smsgoutbox',
  smsgScanBuckets: 'smsgscanbuckets',
  smsgScanChain: 'smsgscanchain',
  smsgSend: 'smsgsend',
  smsgSendAnon: 'smsgsendanon'
  
}
