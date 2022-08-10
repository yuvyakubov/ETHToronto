
import 'hardhat-deploy';
import '@nomiclabs/hardhat-etherscan';

import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';
dotenv.config();
const { DEPLOYER_PRIVATE_KEY, INFURA_PROJECT_ID,ETHERSCAN_API_KEY } = process.env;


const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      chainId: 4,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    }
  },
  namedAccounts: {
    deployer: 0,
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
};

export default config;  