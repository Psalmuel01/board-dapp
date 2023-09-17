import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  font-weight: 600;

  h1 {
    margin-top: 0;
  }

  .details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .axes {
    display: flex;
    gap: 10px;
    margin-left: 20px;
  }

  input {
    outline: none;
    width: 40px;
  }

  // input::-webkit-outer-spin-button,
  // input::-webkit-inner-spin-button {
  //   -webkit-appearance: none;
  //   margin: 0;
  // }

  .button {
    border-radius: 16px;
    margin-left: 20px;
    padding: 8px 16px;
    color: black;
    font-size: 1rem;
    background: #0e76fd;
    border: none;
    font-weight: 400;
  }

  .button:hover {
    filter: brightness(0.9);
  }

  .board {
    display: grid;
    grid-template-columns: repeat(7, 60px);
    grid-gap: 10px;
    justify-content: center;
    margin-top: 10%;
  }

  .cell {
    width: 60px;
    height: 60px;
    // background-color: transparent;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  .cell:hover {
    background-color: lightgray;
  }
`;
