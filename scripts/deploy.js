async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const MyNFT = await ethers.getContractFactory("MyNFT");
    const nft = await MyNFT.deploy();

    console.log("NFT address:", nft.address);
    console.log("gasLimit:", nft.deployTransaction.gasLimit.toString());
    console.log("gasPrice:", nft.deployTransaction.gasPrice.toString());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
});
