const MyNfts = artifacts.require("./MyNFTs.sol");
module.exports = function (deployer) {
  deployer.deploy(MyNfts);
};
