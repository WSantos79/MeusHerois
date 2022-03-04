import styled from "styled-components";
import { corBanner } from "../UI/variaveis";
import px2vw from '../../utils/px2vw'

export const Div = styled.div`
display: flex;
justify-content: space-between;
width: ${px2vw(969.6)}; //60.6rem 969.6px
margin: 3rem auto 0.5rem auto;

@media (min-width: 481px) and (max-width: 1080px) {        
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
}

@media (max-width: 480px) {        
  flex-direction: column-reverse;
  margin-top: 4rem;
  align-items: center;
  justify-content: center;
}
`;

export const DivTwo = styled.div`
 display: flex;
`;

export const Container = styled.div`
display: grid;
grid-template-columns: 0.5fr 0.5fr 1fr;
grid-template-rows: 0.7fr 2.5fr 1fr;
gap: 0px 0px;
grid-template-areas:    
"Primeiro Primeiro ."
"Segundo Terceiro ."
"Segundo Terceiro .";


@media (max-width: 480px) {        
  display: flex;
  flex-direction: column;
  margin-top: 1.3rem;
  align-items: center;
  justify-content: center;  
}

@media (min-width: 481px) and (max-width: 1080px) {
  display: flex;    
  align-items: center;
  justify-content: center; 
}

`;
export const ContainerUm = styled.div`
text-align: center;
grid-area: Primeiro;

@media (max-width: 480px) {        
  grid-area: none;
  position: absolute;
  top: 9.5rem;
  
}

@media (min-width: 481px) and (max-width: 1080px) {        
  grid-area: none;
  position: absolute;
  top: 12.5rem;

  //text-align: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;  
}
`;

export const ContainerDois = styled.div`
grid-area: Segundo;
justify-self: stretch;
align-self: start; 

@media (max-width: 480px) {  
  grid-area: none;  
  align-self: center;
}
`;

export const ContainerTres = styled.div`
grid-area: Terceiro;
justify-self: stretch;
align-self: start;
display: flex;
word-wrap: break-word;

@media (max-width: 480px) {        
  grid-area: none;
  align-self: center;
}
`;

export const Titulo = styled.span`
justify-self: center;
margin-top: 0;
padding: 0;
font-weight: 700;
font-size: 1.9rem;
`;

export const Estatistica = styled.ul`
display: inline-block;
width:  350px;
margin: 4px;
padding-left: 2px;
padding-top: 5px;
flex-shrink: 1;

@media (min-width: 481px) and (max-width: 1080px) {        
 width: 300px;
}
`;
export const Item = styled.li`
margin-bottom: 3px;
display: block;
`;

export const SubTitulo = styled.span`
font-weight: 600;
`;

export const Card = styled.div`
  margin-right: 10px;
  margin-top: auto;
  position: relative;
  width: 300px;

  @media (min-width: 481px) and (max-width: 1080px) {        
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

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
}`;
export const Img = styled.img`
  height: 450px;
`;

export const Input = styled.input`
display: flex;
margin: 1rem auto 0 auto;
width: 40rem;
height: 2rem;
  
&:focus {
  border-color: ${corBanner};
  outline: 1px solid ${corBanner};
}

@media (max-width: 480px) {        
  width: 20rem;
}
@media (min-width: 481px) and (max-width: 1080px) {        
  width: 35rem;
}


`;

export const Alert = styled.span`  
position: absolute;
margin: 0.2rem;
padding: 0;
left: 50%;
transform: translate(-50%, 0);  
color: red;

@media (max-width: 480px) {        
  width: 20rem;
}
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

