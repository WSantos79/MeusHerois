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
`

const Lista = styled.div`
    position: relative;
   // margin: auto;
    overflow: hidden;

    border: 1px outset #000000;
    width: 80%;
`
const H1 = styled.h1`
    padding: 0;
    margin: 0;
    margin-left: 2.5rem;
`
const BtnLeft = styled.button`
    width: 30px;
    height: 2rem;
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
    const [scroll, setScroll] = useState(0);

    function handleRight() {
        let x = scroll - Math.round(window.innerWidth / 2);
        let listW = appConfig.xman.length * 150;
        if (window.innerWidth - listW > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScroll(x);
    }

    function handleLeft() {
        let x = scroll + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScroll(x);
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
                <BtnLeft onClick={() => {
                    handleLeft();
                }}/>
                <Lista>
                    <H1>X-Men</H1>
                    <Div style={{
                    marginLeft: scroll,
                    width: appConfig.xman.length * 150
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
                <BtnRight onClick={() => {
                    handleRight();
                }} />
            </Area>

        </>
    );
};


/*
]
 {Xman.forEach(function (objeto) {
                        console.log(objeto.name, objeto.img)
                    })}




                    <>
                        <p>{value.name}</p>
                        <p>pau no CUUUUUUUUUUUU</p>
                        <figure>
                            <img src={value.img} alt="Imagem de um integrante Xman"></img>
                            <figcaption>{value.name}{key}</figcaption>
                        </figure>
                        {console.log('Xman? ???')}
                        {   /* console.log(Xman)  }
                        {console.log(value.img)}
                    </>








*/