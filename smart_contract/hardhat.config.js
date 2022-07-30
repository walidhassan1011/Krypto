//https://eth-goerli.g.alchemy.com/v2/BWTSLENVvRw9H6e7cVmxcF8XL2EPhGzB

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/BWTSLENVvRw9H6e7cVmxcF8XL2EPhGzB",
      accounts: [
        "bbe645920b513a57a9b35ac70c3526bbdcc0a00aa04ae07d245f50d0a32f92cb",
      ],
    },
  },
};
