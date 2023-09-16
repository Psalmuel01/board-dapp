import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;

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

  .button {
    border-radius: 16px;
    margin-left: 20px;
    padding: 6px 16px;
    color: black;
    font-size: 1rem;
    background: #0e76fd;
    border: none;
  }

  .button:hover {
    filter: brightness(0.9);
  }

  .board {
    display: grid;
    grid-template-columns: repeat(7, 60px);
    grid-gap: 10px;
    justify-content: center;
  }

  .cell {
    width: 60px;
    height: 60px;
    background-color: transparent;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  .cell:hover {
    background-color: lightgray;
  }
`;
