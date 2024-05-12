import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6bEe7139720754C7Cc65f591B11116f6dc15a978'
);

export default instance;
