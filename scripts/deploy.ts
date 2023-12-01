import { ethers, run } from "hardhat";
import * as readlineSync from "readline-sync";

function pauseFor(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  // don't deploy ERC20 token on mainnet
  // const AlienMiladyFumo = await ethers.getContractFactory("AlienMiladyFumo");
  // const alienMiladyFumoContract = await AlienMiladyFumo.deploy();
  // await alienMiladyFumoContract.deployed();
  // console.log("Alien Milady Fumo ERC20 Contract deployed to:", alienMiladyFumoContract.address);

  // const fumoErc20Address = alienMiladyFumoContract.address; // use this on Sepolia

  const [signer] = await ethers.getSigners()

  const NFT = await ethers.getContractFactory("FUMOMintable");
  const oldNFTContract = NFT.attach('0x4158A9968fA96DBfCaE05ef5dA3184f8F0f81A17');
  const totalTokens = 80;

  let owners = [];
  for (let tokenId = 1; tokenId <= totalTokens; tokenId++) {
    try {
      const owner = await oldNFTContract.ownerOf(tokenId);
      owners.push(owner);
    } catch (error) {
      console.error(`Error fetching owner for token ${tokenId}: ${error}`);
    }
  }
  console.log(owners)

  // const owners = [
  //   '0xbe4f0cdf3834bD876813A1037137DcFAD79AcD99',
  //   '0xbe4f0cdf3834bD876813A1037137DcFAD79AcD99',
  //   '0xB520F068a908A1782a543aAcC3847ADB77A04778',
  //   '0xB520F068a908A1782a543aAcC3847ADB77A04778',
  //   '0x113d754Ff2e6Ca9Fd6aB51932493E4F9DabdF596',
  //   '0x113d754Ff2e6Ca9Fd6aB51932493E4F9DabdF596',
  //   '0xaa7577a7A27aa7FcF6d0eC481B87Df3aD0F6a88E',
  //   '0xaa7577a7A27aa7FcF6d0eC481B87Df3aD0F6a88E',
  //   '0x38A4D889a1979133FbC1D58F970f0953E3715c26',
  //   '0x38A4D889a1979133FbC1D58F970f0953E3715c26',
  //   '0x0a7a29432241895997ce9ba9E450d68d971f77F9',
  //   '0x0a7a29432241895997ce9ba9E450d68d971f77F9',
  //   '0x7431931094e8BAe1ECAA7D0b57d2284e121F760e',
  //   '0x7431931094e8BAe1ECAA7D0b57d2284e121F760e',
  //   '0x0dbEffCc323ef4d2C466B7aC60B994e4a55702Ed',
  //   '0x0dbEffCc323ef4d2C466B7aC60B994e4a55702Ed',
  //   '0x9fbB12Ea7DC6dE6503b35dA4389DB3aecf8E4282',
  //   '0x9fbB12Ea7DC6dE6503b35dA4389DB3aecf8E4282',
  //   '0x71B4E2f8122B4aA74AC68ACdcd3c6713E6423786',
  //   '0x71B4E2f8122B4aA74AC68ACdcd3c6713E6423786',
  //   '0x3157Dd485112429B97d987885354e683857A6C62',
  //   '0x3157Dd485112429B97d987885354e683857A6C62',
  //   '0xe8b254F82133ce834A1f8e7C2c1Ed32F2A3418aA',
  //   '0xe8b254F82133ce834A1f8e7C2c1Ed32F2A3418aA',
  //   '0x67D21ebD269d61Ef8cD9F0f3698869b3d818a4B5',
  //   '0x67D21ebD269d61Ef8cD9F0f3698869b3d818a4B5',
  //   '0x67D21ebD269d61Ef8cD9F0f3698869b3d818a4B5',
  //   '0x67D21ebD269d61Ef8cD9F0f3698869b3d818a4B5',
  //   '0xA16E9d147deb505909Ee6A59B9Bac14aA9F8dfd2',
  //   '0xA16E9d147deb505909Ee6A59B9Bac14aA9F8dfd2',
  //   '0xFc6bbf4763845E3Fe68cAD2368F9e1B45f231D32',
  //   '0xFc6bbf4763845E3Fe68cAD2368F9e1B45f231D32',
  //   '0xFc6bbf4763845E3Fe68cAD2368F9e1B45f231D32',
  //   '0xFc6bbf4763845E3Fe68cAD2368F9e1B45f231D32',
  //   '0xbe4f0cdf3834bD876813A1037137DcFAD79AcD99',
  //   '0xbe4f0cdf3834bD876813A1037137DcFAD79AcD99',
  //   '0x67D21ebD269d61Ef8cD9F0f3698869b3d818a4B5',
  //   '0x67D21ebD269d61Ef8cD9F0f3698869b3d818a4B5',
  //   '0x67D21ebD269d61Ef8cD9F0f3698869b3d818a4B5',
  //   '0x67D21ebD269d61Ef8cD9F0f3698869b3d818a4B5',
  //   '0x67D21ebD269d61Ef8cD9F0f3698869b3d818a4B5',
  //   '0x67D21ebD269d61Ef8cD9F0f3698869b3d818a4B5',
  //   '0x67D21ebD269d61Ef8cD9F0f3698869b3d818a4B5',
  //   '0x67D21ebD269d61Ef8cD9F0f3698869b3d818a4B5',
  //   '0x67D21ebD269d61Ef8cD9F0f3698869b3d818a4B5',
  //   '0x67D21ebD269d61Ef8cD9F0f3698869b3d818a4B5',
  //   '0xbccA383e7be60F9300469E32EC1D1B5AF73bfa0E',
  //   '0xbccA383e7be60F9300469E32EC1D1B5AF73bfa0E',
  //   '0xFc6bbf4763845E3Fe68cAD2368F9e1B45f231D32',
  //   '0xFc6bbf4763845E3Fe68cAD2368F9e1B45f231D32',
  //   '0xFc6bbf4763845E3Fe68cAD2368F9e1B45f231D32',
  //   '0xFc6bbf4763845E3Fe68cAD2368F9e1B45f231D32',
  //   '0xd1282134a3481Cb548504073ea31E602228f15b1',
  //   '0xd1282134a3481Cb548504073ea31E602228f15b1',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052',
  //   '0xA1A58311407Ab018141532e8Cf0a9CCCD1Bc9052'
  // ]

  // const BATCH_ADDRESS: string = "0x0e1356208CA2eB9Cc4EFaEb42cc8287CB7ED8e1F"; // SEPOLIA
  const BATCH_ADDRESS: string = "0x6Bc558A6DC48dEfa0e7022713c23D65Ab26e4Fa7"; // MAINNET
  const archetypeBatch = await ethers.getContractAt(
    "ArchetypeBatch",
    BATCH_ADDRESS
  );

  const fumoErc20Address = "0x2890df158d76e584877a1d17a85fea3aeeb85aa6"; // use this on mainnet

  const nftContract = await NFT.deploy(archetypeBatch.address); // this minter param is for airdrop, we'll replace it after we deploy Redeemer
  await nftContract.deployed();
  console.log("NFT Contract deployed to:", nftContract.address);

  // Formulate the calls
  const targets: string[] = [];
  const values: number[] = [];
  const datas: string[] = [];

  for (let i = 0; i < owners.length; i++) {
    targets.push(nftContract.address);
    values.push(0);

    console.log({ receiver: owners[i], tokenId: i + 1, quantity: 1 });
    const data = nftContract.interface.encodeFunctionData("mint", [
      owners[i],
    ]);

    datas.push(data);
  }

  console.log({ targets, values, datas });

  if (!readlineSync.keyInYN("Are the above values correct?")) {
    console.log("config not confirmed. Not sending eth.");
    process.exit();
  }

  const tx = await archetypeBatch.executeBatch(targets, values, datas);
  const receipt = await tx.wait();

  console.log(`Transaction hash: ${receipt.transactionHash}`);

  const Redeemer = await ethers.getContractFactory("Redeemer");
  const redeemerContract = await Redeemer.deploy(fumoErc20Address, nftContract.address);
  await redeemerContract.deployed();
  console.log("Redeemer Contract deployed to:", redeemerContract.address);

  await nftContract.setMinter(redeemerContract.address);

  await pauseFor(5 * 60 * 1000);

  await run("verify:verify", {
    address: nftContract.address,
    contract: "contracts/FUMOMintable.sol:FUMOMintable",
    constructorArguments: [archetypeBatch.address],
  });

  await run("verify:verify", {
    address: redeemerContract.address,
    contract: "contracts/Redeemer.sol:Redeemer",
    constructorArguments: [fumoErc20Address, nftContract.address],
  });
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
