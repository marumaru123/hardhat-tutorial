const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT2");
  const URI = "https://live.staticflickr.com/65535/51034656657_4cbe0259ce_c.jpg";
  const WALLET_ADDRESS = "0xf7EF7CfbBf18CD56872ad8f17dD599079FD16245";
  const CONTRACT_ADDRESS = "0x4c052DEa01C6ec7b2e0A3502038bCc3Bbd57404e";
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
