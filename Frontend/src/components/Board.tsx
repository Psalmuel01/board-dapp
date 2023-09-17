import { Wrapper } from "./Board.styles";

// import {
//   // useAccount,
//   // useConnect,
//   // useContractEvent,
//   useContractReads,
//   // useContractWrite,
//   // useNetwork,
//   // useWaitForTransaction,
// } from "wagmi";
// // import { ethers } from "ethers";
import { useState, useEffect, useRef } from "react";

import { useAccount, useContractReads } from "wagmi";
import boardContract from "../contracts/contracts.json";
const CONTRACT_ADDRESS = "0x5D24256675ed7600a44013DCac8dcF9404129BD1";

const Board = () => {
  const { isConnected } = useAccount();
  const xInput = useRef<HTMLInputElement>(null);
  const yInput = useRef<HTMLInputElement>(null);
  const [points, setPoints] = useState({ x: 1, y: 1 });
  const [colours, setColours] = useState([
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
  ]);

  const { data } = useContractReads({
    contracts: [
      {
        address: CONTRACT_ADDRESS,
        // @ts-ignore
        abi: boardContract.abi,
        functionName: "getColour",
        args: [points.x, points.y],
      },
    ],
  });

  // const { data, isLoading, isSuccess, write } = useContractWrite({
  //   address: CONTRACT_ADDRESS,
  //   abi: boardContract.abi,
  //   functionName: "getColour",
  // });

  console.log(data);
  // console.log(data ? data[0]?.result : "no result");
  // let boardResult = data ? data[0]?.result : 1;
  // let boardResult = "2";

  let board: any[] = [];
  for (let i = 0; i < 35; i++) {
    board.push(
      <div className="cell" style={{ backgroundColor: colours[i] }}></div>
    );
  }

  // const submitPoints = (e: any) => {
  //   e.preventDefault();
  //   //@ts-ignore
  //   if (xInput.current.value == "" || yInput.current.value == "") {
  //     return;
  //   }
  //   // @ts-ignore
  //   setPoints({ x: xInput.current?.value, y: yInput.current?.value });
  //   console.log(points);
  // };

  // useEffect(() => {
  //   if (boardResult === "1") {
  //     //0r 0 0r 1 in enums
  //     let index = Number(points.x) + Number(points.y);
  //     console.log(index);
  //     colours[index] = "white";
  //   } else if (boardResult === "2") {
  //     let index = Number(points.x) + Number(points.y);
  //     console.log(index);
  //     colours[index] = "blue";
  //   } else if (boardResult === "3") {
  //     let index = Number(points.x) + Number(points.y);
  //     console.log(index);
  //     colours[index] = "red";
  //   } else if (boardResult === "4") {
  //     let index = Number(points.x) + Number(points.y);
  //     console.log(index);
  //     colours[index] = "black";
  //   }
  //   // @ts-ignore
  // }, [points, boardResult, colours]);

  return (
    <Wrapper>
      <h1>7x5 Board</h1>
      <form className="details" >
        <div className="axes">
          <label htmlFor="x">X Axis:</label>
          <input type="number" id="x" min="1" max="7" ref={xInput}></input>
        </div>
        <div className="axes">
          <label htmlFor="y">Y Axis:</label>
          <input type="number" id="y" min="1" max="5" ref={yInput}></input>
        </div>
        <button className="button">Get Colour</button>
      </form>
      <div className="board">{board}</div>
    </Wrapper>
  );
};

export default Board;
