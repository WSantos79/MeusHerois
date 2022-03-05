import React, { useState, useContext } from "react";
import appConfig from "../../config.json";
import { SeeHeroContext } from "../../commom/context/SeeHero";
import {
  Area,
  Btn,
  Lista,
  H1,
  Div,
  CaixaCard,
  CardSecundario,
  IMG,
  Figcaption,
} from "../UI";
import { scrollToTop } from "../ScrollTop";

export default () => {
  const { setId } = useContext(SeeHeroContext);
  const [scroll, setScroll] = useState(0);
  const maxScroll = appConfig.xman.length * 197;

  function handleLeft() {
    let pixel = scroll + Math.round(window.innerWidth / 2);
    if (pixel > 0) {
      pixel = 0;
    }
    setScroll(pixel);
  }

  function handleRight() {
    let pixel = scroll - Math.round(window.innerWidth / 2);
    let listaLargura = maxScroll;

    if (window.innerWidth - listaLargura > pixel) {
      pixel = window.innerWidth - listaLargura;
    }
    setScroll(pixel);
  }

  return (
    <>
      <Area>
        <Btn
          onClick={() => {
            handleLeft();
          }}

          style={{ opacity: `${scroll === 0 ? '0' : '1'}` }}
        >
          &#10094;
        </Btn>
        <Lista>
          <H1>X-Men</H1>
          <Div
            style={{
              marginLeft: scroll,
              width: maxScroll, // qnt de item x a largura deles
            }}
          >
            {appConfig.xman.map((heroi) => {
              return (
                <CaixaCard
                  key={heroi.name}
                  onClick={() => {
                    setId(heroi.id);
                    scrollToTop();
                  }}
                >
                  <CardSecundario>
                    <IMG
                      src={heroi.img}
                      alt="Imagem de um integrante Xman"
                    ></IMG>
                    <Figcaption>{heroi.name}</Figcaption>
                  </CardSecundario>
                </CaixaCard>
              );
            })}
          </Div>
        </Lista>
        <Btn
          onClick={() => {
            handleRight();
          }}
          //style={{ opacity: `${scroll <= -2734 ? '0' : '1'}` }}
        >
          &#10095;
        </Btn>
      </Area>
    </>
  );
};

/*


<script src="../../utils/dragscroll.js"></script>



*/