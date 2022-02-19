import React, { useEffect, useState, useRef } from "react";
import { listaHeroi } from "../../api/api";
import appConfig from "../../config.json"
import styled from "styled-components";
import {corSecundaria, corPrimaria, corTexto, corTextoHover} from "../UI/variaveis"

const Area = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    --opa: 0;
    
    &:hover {
        --opa: 1;
    }   
`

const Lista = styled.div`
    position: relative;   
    overflow: hidden;
   // background: ${corSecundaria};    
    
    width: 80%;  
    
`
const H1 = styled.h1`
    padding: 0;
    margin: 0;
    margin-left: 2.5rem;
`
const Btn = styled.p`   
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
const CaixaCard = styled.div`
   // border: 1px outset #000000; 

    margin: 0 0 30px 0;
    transition: transform 500ms;
    
    &:hover ~ &, &:focus ~ &{
        transform: translateX(10%);   
    }
    
`
const Div = styled.div`    
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

const CardSecundario = styled.figure`
    margin: 10px;
    padding: 0;    
    
`
const IMG = styled.img`
    border-radius: 15px 15px 15px 15px;
    -webkit-border-radius: 15px 15px 15px 15px;
    -moz-border-radius: 15px 15px 15px 15px;
`
const Figcaption = styled.figcaption`
    text-align: center;
    `

export default () => {
    const XmanNumeros = [];
    const [isLoading, setIsLoading] = useState(false);
    const firstUpdate = useRef(true);
    const [scroll, setScroll] = useState(0);
    
    function handleLeft() {
        let pixel = scroll + Math.round(window.innerWidth / 2);
        if(pixel > 0){
            pixel = 0;
        }
        setScroll(pixel);
    }

    function handleRight() {
        let pixel = scroll - Math.round(window.innerWidth / 2);
        let listaLargura = appConfig.xman.length * 200;

        if((window.innerWidth - listaLargura) > pixel) {
            pixel = (window.innerWidth - listaLargura);
        }
        setScroll(pixel);
    }

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            //busca(digitado);  
            console.log('fui executado aqui')
        }
        console.log('to aqui')
        XmanNumeros.forEach(num => {
            listaHeroi(num);
        })
        console.log('setando o loading')
        setIsLoading(true)

    }, []);

    return (
        <>            
            <Area>
            {console.log(appConfig.xman)}
                <Btn onClick={() => {
                    handleLeft();
                }}>&#10094;</Btn>
                <Lista>
                    <H1>X-Men</H1>
                    <Div style={{
                    marginLeft: scroll,
                    width: appConfig.xman.length * 214,  // qnt de item x a largura deles

                }}>
                       
                        {appConfig.xman.map(heroi => {
                            return (
                                <CaixaCard>
                                    <CardSecundario key={heroi.name}>
                                        <IMG src={heroi.img} alt="Imagem de um integrante Xman"></IMG>
                                        <Figcaption>{heroi.name}</Figcaption>
                                    </CardSecundario>
                                </CaixaCard>

                            )
                        })}
                    </Div>
                </Lista>
                <Btn onClick={() => {
                    handleRight();
                }}>&#10095;</Btn>
            </Area>

        </>
    );
};