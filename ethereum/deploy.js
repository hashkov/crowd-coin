const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const compoiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'prefer gauge job arrow topic garbage unlock office cost dog coconut industry',
  'https://sepolia.infura.io/v3/bf1359111e1f434a8eb828c643f2ec60'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compoiledFactory.interface)
  )
    .deploy({ data: compoiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
