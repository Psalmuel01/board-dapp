import { ethers } from "hardhat";

async function main() {
  const boardAddr = "0x904A91E205343Ac7BDA1875E40cE0c1884Fb9aFd";
  const boardContract = await ethers.getContractAt("Iboard", boardAddr);

  const getColour = await boardContract.getColour(3, 4);
  const getColour2 = await boardContract.getColour(2, 4);
  const getColour3 = await boardContract.getColour(3, 3);
  const getColour4 = await boardContract.getColour(2, 1);
  console.log({
    colour: ethers.formatUnits(getColour, 0),
    colour2: ethers.formatUnits(getColour2, 0),
    colour3: ethers.formatUnits(getColour3, 0),
    colour4: ethers.formatUnits(getColour4, 0),
  });

  // await boardContract.setColour(2, 4, 4);

  // console.log({
  //   getColour: ethers.formatUnits(await boardContract.getColour(2, 4), 0),
  // });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
