import styled from "styled-components";
import { corBanner } from "../UI/variaveis";

export const Div = styled.div`
display: flex;
justify-content: space-between;
width: 60.6rem; // 58.6rem;
margin: 2rem auto 0.5rem auto;
// background: gray;
`;

export const DivTwo = styled.div`
// justify-content: flex-start;
// align-items: flex-start;
// align-content: flex-start;
width: 66%;
//  background-color: #2f1d58;
`;

export const Container = styled.div`
width: 100%;
//  background-color: green;
display: grid;
grid-template-columns: 0.5fr 0.5fr 2fr;
grid-template-rows: 0.7fr 2.5fr 1fr;
gap: 0px 0px;
grid-template-areas:    
"Primeiro Primeiro ."
"Segundo Terceiro ."
"Segundo Terceiro .";
`;
export const ContainerUm = styled.div`
width: 89%;
// margin-left: 70px;
text-align: center;
grid-area: Primeiro;
//justify-self: center;
// background-color: blue;
`;
export const ContainerDois = styled.div`
grid-area: Segundo;
//background-color: purple;
justify-self: stretch;
align-self: start; 
display: flex;
//word-wrap: break-word; 
width: 95%;

`;
export const ContainerTres = styled.div`
grid-area: Terceiro;
//background-color: white;
justify-self: start;
align-self: start;
display: flex;
word-wrap: break-word;
width: 78%;

`;

export const Titulo = styled.span`
justify-self: center;
margin-top: 0;
padding-top: 0;
margin-left: 2rem;
font-weight: 700;
font-size: 1.9rem;
`;

export const Estatistica = styled.ul`
display: inline-block;
width: 350px;
margin: 4px;
// background-color: lightblue;
padding-left: 2px;
padding-top: 5px;
`;
export const Item = styled.li`
margin-bottom: 3px;
display: block;
// font-weight: 600;
`;

export const SubTitulo = styled.span`
font-weight: 600;
`;

export const Card = styled.div`
    margin-right: 10px;
    margin-top: auto;
    position: relative;
    width: 300px;

    &:before {
      position: absolute;
      content: "";
      left: -10px;

      width: 2px;
      height: 100%;
      top: 10px;
      background: red;
    }
    &:after {
      position: absolute;
      content: "";
      left: -10px;

      width: 100%;
      height: 2px;
      bottom: -10px;
      background: red;
    }
  `;
export const CardImagem = styled.div`
    &:before {
      position: absolute;
      content: "";
      background: red;

      width: 2px;
      height: 100%;
      right: -10px;
      left: inherit;
      top: -10px;
    }

    &:after {
      position: absolute;
      content: "";
      background: red;

      width: 100%;
      height: 2px;
      top: -10px;
      left: 10px;
    }
  `;
export const Img = styled.img`
    height: 450px;
  `;

export const Input = styled.input`
  display: flex;
  margin: 1rem auto;
  width: 40rem;
  height: 2rem;
`;

export const Loading = styled.div`
  position: relative;
  top: 25%;
  left: 50%;
  margin: 12rem 0 12rem 0;
  
 
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: transparent;
  border: 3px solid #3c3c3c;
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  font-family: sans-serif;
  font-size: 20px;

  color: black;
  letter-spacing: 4px;
  text-transform: uppercase;
  //text-shadow:0 0 10px #fff000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  &:before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-right: 3px solid ${corBanner};
    border-radius: 50%;
    animation: animateC 1.3s linear infinite;
  }

  & > span:first-child {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    background: transparent;
    transform-origin: left;
    animation: animate 1.3s linear infinite;
  }

  & > span:first-child:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${corBanner};
    top: -6px;
    right: -8px;
    box-shadow: 0 0 20px ${corBanner};
  }

  @keyframes animateC {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
`;