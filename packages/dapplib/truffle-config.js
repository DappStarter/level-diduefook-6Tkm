require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success stone cruise mushroom protect grid kiwi suspect general'; 
let testAccounts = [
"0xa6f9ae85b06bccf430b0f34a2486a60acd06a0a3361ae4e0e3f6ff5496d6baf4",
"0xa946361b733b6ec0236f6b9aac293d73886b3521bc24b2417187f1dee2ace92d",
"0x6080779c6b41479478d2049437bc51d149bd6a25ce6c3bd871fcd71d78905567",
"0x0f0e95ed0446d3fb1d8b13fb7bb33775ef2ece267affc282bbad815e7e80a56a",
"0x9cc7fe08db7b17095ccf1d50bfd1920fa15b78f390b2c3cc179c60e57f65da35",
"0xc2254132165aa287ccd03edabc36ce68085be67383058240cd41dec76d34543d",
"0xcd6944271529fb959b76f6737892b89bdd41a840762148d39ab5204583f0f635",
"0x11675ab1288c7c36b63659ed1a706601232c86743a5571911c832c83ded3b050",
"0x1c838a4055d7bc3e8b8ff970ff4e4aeaf3fd1eab00ba037fb7cc57dfcb548ae4",
"0xf20e9311c312187cb68b9c2c8129308872952c23c51553cee1d4c74a6d318fd8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

