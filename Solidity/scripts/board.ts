import { ethers } from "hardhat";

async function main() {
  const board = await ethers.deployContract("ColourBoard", []);

  await board.waitForDeployment();

  console.log(`Board deployed to ${board.target}`);
  //0x904A91E205343Ac7BDA1875E40cE0c1884Fb9aFd
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
