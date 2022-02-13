import React, { useEffect, useState, useRef } from "react";
import { listaHeroi } from "../../api/api";
import appConfig from "../../config.json"
import styled from "styled-components";


const Div = styled.div`
    display: flex;
    
`;
const H1 = styled.h1`
    padding: 0;
    margin: 0;
    margin-left: 2.5rem;
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
            <div>
                <H1>X-Men</H1>
                <Div>

                    {appConfig.xman.map(heroi => {
                        return (

                            <figure key={heroi.name}>
                                <img src={heroi.img} alt="Imagem de um integrante Xman"></img>
                                <figcaption>{heroi.name}</figcaption>
                            </figure>

                        )
                    })}
                </Div>
            </div>

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