import styled from "styled-components";
import { corBanner } from "../UI/variaveis"


/* Cabeçalho */
export const Cabecalho = styled.div`
    display:flex;
    justify-content: center;
    height: 10rem;    

    background: ${corBanner};  
        
`
export const Banner = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');   
   
   
    align-self: center;
  //  line-height: 10rem;

    font-size: 130px;
    font-family: 'Shizuru', cursive;
    font-weight: 1000;

    //background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstaticmobly.akamaized.net%2Fp%2FRM-Adesivos-Adesivo-de-Parede---Azulejos-super-herC3B3is-443-6311-581112-1-product.jpg&f=1&nofb=1');
    background-image:	url('fundo-banner.jpg');
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
/* Meu heroi */

export const Div = styled.div`
display: flex;
justify-content: space-between;
width: 60.6rem; // 58.6rem;
margin: 2rem auto;
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
// background-color: purple;
justify-self: stretch;
align-self: start; 
display: flex;
word-wrap: break-word; 
width: 70%;

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