import { Wrapper } from "./Board.styles";
import { useState, useEffect, useRef } from "react";
import boardContract from "../contracts/contracts.json";
import { ethers } from "ethers";

const Board = () => {
  const contractAddress = "0x904A91E205343Ac7BDA1875E40cE0c1884Fb9aFd";
  const abi = boardContract.abi;
  const xInput = useRef<HTMLInputElement>(null);
  const yInput = useRef<HTMLInputElement>(null);
  const [points, setPoints] = useState({ x: null, y: null });
  const [submit, setSubmit] = useState(false);
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

  const provider = new ethers.JsonRpcProvider(
    "https://eth-sepolia.g.alchemy.com/v2/Zi_F-3fTztPtozvm58nBdd21noBes10h"
  );
  const contract = new ethers.Contract(contractAddress, abi, provider);

  let board: any[] = [];

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
      board.push(
        <div className="cell" style={{ backgroundColor: colours[i * 7 + j] }}>
          {j},{i}
        </div>
      );
    }
  }

  const getColour = async (e: any) => {
    //@ts-ignore
    if (xInput.current.value === "" || yInput.current.value === "") {
      return;
    }
    setSubmit(true);

    try {
      const col = await contract.getColour(0, 1);
      const colour = ethers.formatUnits(col, 0);

      if (colour === "0") {
        //@ts-ignore
        setPoints({ x: xInput.current.value, y: yInput.current.value });
        console.log(points);
        // let index = Number(points.y) * 7 + Number(points.x);
        // const newColours = colours;
        // newColours[index] = "white";
        // setColours(newColours);
      } else if (colour === "1") {
        let index = Number(points.y) * 7 + Number(points.x);
        console.log(index);
        colours[index] = "blue";
      } else if (colour === "2") {
        let index = Number(points.y) * 7 + Number(points.x);
        console.log(index);
        colours[index] = "red";
      } else if (colour === "3") {
        let index = Number(points.y) * 7 + Number(points.x);
        console.log(index);
        colours[index] = "black";
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setSubmit(false);
  };

  useEffect(() => {
    console.log("changed");
    let index = Number(points.y) * 7 + Number(points.x);
    if (submit) {
      const newColours = colours;
      newColours[index] = "white";
      setColours(newColours);
    }
  }, [points, submit, colours]);

  // // @ts-ignore
  // setShowFlash(true);
  // let index = Number(points.y) * 7 + Number(points.x);
  // const newColours = colours;
  // newColours[index] = "yellow";
  // setColours(newColours);

  return (
    <Wrapper>
      <h1>7x5 Board</h1>
      <div className="details">
        <div className="axes">
          <label htmlFor="x">X Axis:</label>
          <input type="number" id="x" min="0" max="6" ref={xInput}></input>
        </div>
        <div className="axes">
          <label htmlFor="y">Y Axis:</label>
          <input type="number" id="y" min="0" max="4" ref={yInput}></input>
        </div>
        <button className="button" onClick={getColour}>
          Get Colour
        </button>
      </div>
      <div className="board">{board}</div>
    </Wrapper>
  );
};

export default Board;
