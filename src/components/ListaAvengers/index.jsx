import React, { useState, useContext } from "react";
import appConfig from "../../config.json"
import { SeeHeroContext } from "../../commom/context/SeeHero";
import { Area, Btn, Lista, H1, Div, CaixaCard, CardSecundario, IMG, Figcaption } from "../UI";

export default () => {   
    const { setId } = useContext(SeeHeroContext)
    const [scroll, setScroll] = useState(0);

    function handleLeft() {
        let pixel = scroll + Math.round(window.innerWidth / 2);
        if (pixel > 0) {
            pixel = 0;
        }
        setScroll(pixel);
    }

    function handleRight() {
        let pixel = scroll - Math.round(window.innerWidth / 2);
        let listaLargura = appConfig.avengers.length * 203;

        if ((window.innerWidth - listaLargura) > pixel) {
            pixel = (window.innerWidth - listaLargura);
        }
        setScroll(pixel);
    }

    return (
        <>
            <Area>                
                <Btn onClick={() => {
                    handleLeft();
                }}>&#10094;</Btn>
                <Lista>
                    <H1>Avengers</H1>
                    <Div style={{
                        marginLeft: scroll,
                        width: appConfig.avengers.length * 203,  // qnt de item x a largura deles

                    }}>

                        {appConfig.avengers.map(heroi => {
                            return (
                                <CaixaCard onClick={() =>                                                           
                                    setId(heroi.id)
                                }>
                                    <CardSecundario key={heroi.name}>
                                        <IMG src={heroi.img} alt="Imagem de um integrante dos Vingadores"></IMG>
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