import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider(
    'https://sepolia.infura.io/v3/bf1359111e1f434a8eb828c643f2ec60'
  );
  web3 = new Web3(provider);
}

export default web3;
