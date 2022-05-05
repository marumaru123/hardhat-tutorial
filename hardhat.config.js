require("@nomiclabs/hardhat-waffle");
const env = require("./config/config");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  networks: {
    arbitrum: {
      url: "https://rinkeby.arbitrum.io/rpc",
      accounts: [env.priKey],
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [env.priKey],
    },
    localhost: {
      url: "http://localhost:8545",
      accounts: [env.priKey],
    },
  },
};
