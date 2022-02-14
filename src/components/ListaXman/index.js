import React, { useEffect, useState, useRef } from "react";
import { listaHeroi } from "../../api/api";
import appConfig from "../../config.json"
import styled from "styled-components";

const Lista = styled.div`
    border: 1px outset #000000;
    margin-left: 5px;
    margin-bottom: 10px;
    width: 100%;
`
const H1 = styled.h1`
    padding: 0;
    margin: 0;
    margin-left: 2.5rem;
`
const CaixaCard = styled.div`
    border: 1px outset #000000;
    margin: 7px;
    position: relative;
    display: block;
    transition: transform 500ms;
    flex: 1 1 0px;   
    &:hover{
        transform: translateX(-25%);
    }
    &:hover ~ &, &:focus ~ &{
        transform: translateX(25%);      
    }
    
`

const Div = styled.div`
    display: flex;
    & ${CaixaCard}:hover, &:focus ${CaixaCard} {
        transform: scale(1.5);
        z-index: 1;
        cursor: pointer;
    }
    &:hover ${CaixaCard}, &:focus-within ${CaixaCard} {
      //  transform: translateX(-25%);
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
            {console.log(appConfig.xman)}
            <Lista>
                <H1>X-Men</H1>
                <Div>

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