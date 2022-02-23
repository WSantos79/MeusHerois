import styled from "styled-components";
import { corSecundaria, corPrimaria, corTexto, corTextoHover } from "../UI/variaveis"

export const Area = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    --opa: 0;
    
    &:hover {
        --opa: 1;
    }
`

export const Lista = styled.div`
    position: relative;   
    overflow: hidden;
   // background: ${corSecundaria}; 
    
    width: 80%;   
    
`
export const H1 = styled.h1`
    padding: 0;
    margin: 0;
    margin-left: 2.5rem;
`
export const Btn = styled.p`   
    opacity: var(--opa);
    transition: all ease 0.5s;
    
    margin: 0 10px;
    box-shadow: none;
    font-family: Arial;
    color: ${corTexto};
    font-size: 60px;
    background: ${corPrimaria};
    padding: 0;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
    color: ${corTextoHover};
    }
`
export const CaixaCard = styled.div`
   // border: 1px outset #000000; 

    margin: 0 0 30px 0;
    transition: transform 500ms;
    
    &:hover ~ &, &:focus ~ &{
        transform: translateX(10%);   
    }
    
`
export const Div = styled.div`    
    display: flex;
    transition: all ease 0.5s;    

    & ${CaixaCard}:hover, &:focus ${CaixaCard} {
        transform: scale(1.3) ;        
        z-index: 1;
        cursor: pointer;
    }
    &:hover > * , &:focus-within > *  {
        transform: translateX(-10%);        
    }
    & > div:first-child {
        margin-left: 1.3rem;
    }   
`;

export const CardSecundario = styled.figure`
    margin: 10px;
    padding: 0;    
    
`
export const IMG = styled.img`
    border-radius: 15px 15px 15px 15px;
    -webkit-border-radius: 15px 15px 15px 15px;
    -moz-border-radius: 15px 15px 15px 15px;
`
export const Figcaption = styled.figcaption`
    text-align: center;
`