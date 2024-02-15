// exporting from a bs58 private key to an Uint8Array
// == from phantom private key to solana cli id.json key file
// npm install bs58 @solana/web3.js

const web3 = require("@solana/web3.js");
const bs58 = require("bs58");
// let secretKey = bs58.decode("[base58 private key here]");
// console.log(`[${web3.Keypair.fromSecretKey(secretKey).secretKey}]`);

// exporting back from Uint8Array to bs58 private key
// == from solana cli id.json key file to phantom private key

privkey = new Uint8Array([
  35, 32, 191, ...
]); // content of id.json here
console.log(bs58.encode(privkey));
