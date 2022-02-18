import React, { useEffect, useState, useRef } from "react";
import { listaHeroi } from "../../api/api";
import appConfig from "../../config.json"
import styled from "styled-components";


const Area = styled.div`
    display:flex;
    padding: 0;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;

    --opa: 0;

    &:hover {
        --opa: 1;
    }
`

const Lista = styled.div`
    position: relative;
   // margin: auto;
    overflow-X: hidden;
    overflow-Y: scroll;  
    
    border: 1px outset #000000;
    width: 80%;
    padding-bottom: 70px;
    padding-top: 25px;   
   
`
const H1 = styled.h1`
    padding: 0;
    margin: 0;
    margin-left: 2.5rem;
`
const Btn = styled.button`
    width: 30px;
    height: 2rem;
    opacity: var(--opa);
    transition: all ease 0.5s;
`
const BtnRight = styled.button`
    width: 30px;
    height: 2rem;
`

const CaixaCard = styled.div`
    border: 1px outset #000000;
    margin: 7px;
    transition: transform 500ms;
    
    &:hover ~ &, &:focus ~ &{
        transform: translateX(25%);   
    }
    
`
const Div = styled.div`    
    display: flex;
    transition: all ease 0.5s;

     
    & ${CaixaCard}:hover, &:focus ${CaixaCard} {
        transform: scale(1.5) ;
        z-index: 1;
        cursor: pointer;
    }
    &:hover > * , &:focus-within > *  {
        transform: translateX(-25%);        
    }   
`;

const CardSecundario = styled.figure`
    margin: 10px;
    padding: 0;    
    
`
const Figcaption = styled.figcaption`
    text-align: center;

    `

export default () => {
    const XmanNumeros = [];
    const [isLoading, setIsLoading] = useState(false);
    const firstUpdate = useRef(true);
    const [scroll, setScroll] = useState(-510);
    
    function handleLeft() {
        let pixel = scroll + Math.round(window.innerWidth / 2);
        if(pixel > 0){
            pixel = 0;
        }
        setScroll(pixel);
    }

    function handleRight() {
        let pixel = scroll - Math.round(window.innerWidth / 2);
        let listaLargura = appConfig.xman.length * 235;

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
                <Btn onClick={() => {
                    handleLeft();
                }}/>
                <Lista>
                    <H1>X-Men</H1>
                    <Div style={{
                    marginLeft: scroll,
                    width: appConfig.xman.length * 235 // qnt de item x a largura deles
                }}>
                       
                        {appConfig.xman.map(heroi => {
                            return (
                                <CaixaCard>
                                    <CardSecundario key={heroi.name}>
                                        <img src={heroi.img} alt="Imagem de um integrante Xman"></img>
                                        <Figcaption>{heroi.name}</Figcaption>
                                    </CardSecundario>
                                </CaixaCard>

                            )
                        })}
                    </Div>
                </Lista>
                <Btn onClick={() => {
                    handleRight();
                }} />
            </Area>

        </>
    );
};