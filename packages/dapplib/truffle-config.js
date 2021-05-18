require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski struggle deny situate collect harvest muscle army genuine'; 
let testAccounts = [
"0x5379820fa8a3fed69b19a1f7b6aa8e7e65a4f541600587f410b0ee7b8f440d28",
"0x29e222c860d6b278ff1e20cc22671c4ca7b116032ff0c9c568d40672a72e6acf",
"0x8659181000a820e444311730dc3da57c537a640901afd9759870ba44184001de",
"0xe72096118dc33626e80a4dccfada7b2b4294ca7cd12e61cab9320d9d3b1213c8",
"0x62c0ffd44407b27489c3675d8968875250f90937c83e222922c8b78a8a64d366",
"0x70779fcc5225cf72059a29400964781ad9a1abdf2c303be979216ab966e220a4",
"0xa11c0e0809414a81b76060ce6e0d5bd4afe928f3428ab9d89d507a2234fb9249",
"0x32a6d86e7079b4e4102a6ac4e97c02e957c0f5819cc471439c7f3e4d77e0f15d",
"0x855136e4d94fa2fd71905a713489d62cb80038e021420a8a6bfae990657518bc",
"0xaf110c482955a0d52c60f963b2b428e8bba27640a152b8f66251f3375f6abf5c"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
