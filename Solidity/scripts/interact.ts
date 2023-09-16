import { ethers } from "hardhat";

async function main() {
  // const boardAddr = "0x5923b514e089AD6421504Ca98D80eb2eABB20DAB";
  const boardAddr = "0x5D24256675ed7600a44013DCac8dcF9404129BD1";
  const boardContract = await ethers.getContractAt("Iboard", boardAddr);

  console.log({
    getColour: ethers.formatUnits(await boardContract.getColour(2, 4), 0),
  });

  await boardContract.setColour(2, 4, 4);

  console.log({
    getColour: ethers.formatUnits(await boardContract.getColour(2, 4), 0),
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
