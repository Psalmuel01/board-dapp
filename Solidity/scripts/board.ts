import { ethers } from "hardhat";

async function main() {
  const board = await ethers.deployContract("ColourBoard", []);

  await board.waitForDeployment();

  console.log(`Board deployed to ${board.target}`);
  //0x5D24256675ed7600a44013DCac8dcF9404129BD1
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
