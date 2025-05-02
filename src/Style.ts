import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
     margin: 0;
     box-sizing: border-box;
     padding: 0;
     width: 100vw;
     height: 100vh;
     font-size: 16px;
     background: #002b4f;

     display: flex;
     justify-content: center;
     align-items: center;
    }

`;

export const Conteiner = styled.main`
  .conteiner {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

  .caixa-img {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .imagem {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid white;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px 0;
  }

  ul li a {
    padding: 20px 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid white;
    border-radius: 10px;

    text-decoration: none;
    font-family: "DM Serif Text", serif;
    font-size: 2rem;
    color: white;

    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    font-weight: 500;

    transition: backcground 0.2s;
  }

  ul li a:hover {
    background: rgb(1, 65, 117);
    cursor: pointer;
    transition: 0.5s;
  }

  @media (max-width: 425px) {
    .imagem {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

    ul li a {
      padding: 10px 100px;
    }
  }

  @media (max-width: 375px) {
    ul li a {
      padding: 10px 95px;
    }
  }

  @media (max-width: 320px) {
    ul li a {
      padding: 10px 65px;
    }
  }
`;
