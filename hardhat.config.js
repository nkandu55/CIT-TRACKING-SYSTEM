require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.28",
        settings: {
          optimizer: { enabled: true, runs: 200 }
        }
      },
      {
        version: "0.8.20",
        settings: {
          optimizer: { enabled: true, runs: 200 }
        }
      },
      {
        version: "0.8.19",
        settings: {
          optimizer: { enabled: true, runs: 200 }
        }
      }
    ]
  }
};
