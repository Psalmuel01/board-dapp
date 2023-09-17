import { Wrapper } from "./Board.styles";
import { useState, useEffect, useRef } from "react";
import boardContract from "../contracts/contracts.json";
import { ethers } from "ethers";

const Board = () => {
  const contractAddress = "0x904A91E205343Ac7BDA1875E40cE0c1884Fb9aFd";
  const abi = boardContract.abi;
  const xInput = useRef<HTMLInputElement>(null);
  const yInput = useRef<HTMLInputElement>(null);
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

  const provider = new ethers.JsonRpcProvider(import.meta.env.VITE_SEPOLIARPC);
  const contract = new ethers.Contract(contractAddress, abi, provider);

  const board: any[] = [];

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
    if (xInput.current.value === "" || yInput.current.value === "") {
      return;
    }
    setSubmit(true);

    try {
      const col = await contract.getColour(
        xInput.current?.value,
        yInput.current?.value
      );
      const colour = ethers.formatUnits(col, 0);
      // console.log("colourrr", colour);

      // console.log(xInput.current?.value, yInput.current?.value);
      const points = { x: xInput.current?.value, y: yInput.current?.value };

      const index = Number(points.y) * 7 + Number(points.x);

      if (colour === "0") {
        const newColours = colours;
        newColours[index] = "white";
        setColours(newColours);
      } else if (colour === "1") {
        const newColours = colours;
        newColours[index] = "blue";
        setColours(newColours);
      } else if (colour === "2") {
        const newColours = colours;
        newColours[index] = "red";
        setColours(newColours);
      } else if (colour === "3") {
        const newColours = colours;
        newColours[index] = "black";
        setColours(newColours);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setSubmit(false);
  };

  useEffect(() => {
    // console.log("changed");
  }, [submit, colours]);

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
