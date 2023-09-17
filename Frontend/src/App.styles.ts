import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');

    * {
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
    }

    html {
        // height: 100%;
    }

    body {
        background: #191919;
        color: #fff;
        display: flex;
        margin: 3%;
        justify-content: center;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }
`;
