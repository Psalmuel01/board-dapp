import { Wrapper } from "./Board.styles";

import {
  useAccount,
  useConnect,
  useContractEvent,
  useContractReads,
  useContractWrite,
  useNetwork,
  useWaitForTransaction,
} from "wagmi";

import { ethers } from "ethers";
import { useState, useEffect, useRef } from "react";

import boardContract from "../contracts/contracts.json";

const CONTRACT_ADDRESS = "0x5D24256675ed7600a44013DCac8dcF9404129BD1";

const Board = () => {
  const { isConnected } = useAccount();
  const xInput = useRef(null);
  const yInput = useRef(null);
  const [points, setPoints] = useState({ x: 0, y: 0 });

  // const { data, isLoading, isSuccess, write } = useContractWrite({
  //   address: CONTRACT_ADDRESS,
  //   abi: boardContract.abi,
  //   functionName: "getColour",
  // });

  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        address: CONTRACT_ADDRESS,
        abi: boardContract.abi,
        functionName: "getColour",
        args: [points.x, points.y],
      },
    ],
  });

  useEffect(() => {
    setPoints({ x: xInput.current.value, y: yInput.current.value });
  }, [xInput.current.value, yInput.current.value]);

  const submitPoints = (e) => {
    setPoints({ x: xInput.current.value, y: yInput.current.value });
    // use the data here
    // const data[0]?.result
  };

  const board = [];
  for (let i = 0; i < 35; i++) {
    board.push(<div className="cell"></div>);
  }

  return (
    <Wrapper>
      <h1>7x5 Board</h1>
      <form className="details" onSubmit={submitPoints}>
        <div className="axes">
          <label htmlFor="x">X Axis:</label>
          <input type="number" id="x" min="1" max="7" ref={xInput}></input>
        </div>
        <div className="axes">
          <label htmlFor="y">Y Axis:</label>
          <input type="number" id="y" min="1" max="5" ref={yInput}></input>
        </div>
        <button className="button">Get Color</button>
      </form>
      <div className="board">{board}</div>
    </Wrapper>
  );
};

export default Board;
