import React, { useEffect, useState, useRef, useContext } from "react";
import { busca } from "../../api/api";
import { corBanner } from "../UI/variaveis";
import {
  Div,
  DivTwo,
  Container,
  ContainerUm,
  ContainerDois,
  ContainerTres,
  Titulo,
  SubTitulo,
  Estatistica,
  Item,
  Card,
  CardImagem,
  Img,
  Loading,
  Input  
} from "./styles";
import appConfig from "../../config.json";
import { SeeHeroContext } from "../../commom/context/SeeHero";

export default () => {
  // const [heroi, setHeroi] = useState({});
  const [digitado, setDigitado] = useState("");
  const firstUpdate = useRef(true);
  const { heroi, setHeroi, setId } = useContext(SeeHeroContext);

  useEffect(() => {
    const n = Math.floor(Math.random() * 562);
    // const id = appConfig.idExistente[n];
    setId(appConfig.idExistente[n]);
    // batman 70
    // nomeGrande 636
    // grande aliase 584
    // grande 75
    // wolverine 717
    //meuHeroi(setHeroi, id);
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      //busca(digitado);
      // console.log('fui executado aqui')
    } else {
      busca(digitado, setHeroi, heroi.id);
    }
    //  console.log('to aqui')
    //  console.log(count);
  }, [digitado]);

  return (
    <>
  { //    appConfig.isShow && (
    //    <Alert>
    //      Herói não encontrado. Escreva em inglês e tente com hífen ex:
    //      Spider-Man
    //    </Alert>
    //  ) 
      }

      <Input
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setDigitado(e.target.value);
            e.target.value = '';
          }
        }}
        type="search"
        placeholder={appConfig.isShow ?  `Herói não encontrado. Escreva em inglês.` : `Busque seu Herói`}

        //style={{color: `${appConfig.isShow ? 'red' : 'black'}`, fontWeight: `${appConfig.isShow ? 'bold' : 'normal'}` }}
        
      ></Input>

      {!heroi.id && (
        <Loading>
          Loading
          <span />
        </Loading>
      )}

      {heroi.id && (
        <>
          <Div>
            <DivTwo>
              <Container>
                <ContainerUm>
                  <Titulo>{heroi.name}</Titulo>
                </ContainerUm>
                <ContainerDois>
                  <Estatistica>
                    <Item>
                      <SubTitulo>Nome completo:</SubTitulo>{" "}
                      {heroi.biography.fullName}
                    </Item>
                    <Item>
                      <SubTitulo>Alinhamento:</SubTitulo>{" "}
                      {heroi.biography.alignment === "good" ? "Herói" : "Vilão"}
                    </Item>
                    <Item>
                      <SubTitulo>Inteligência:</SubTitulo>{" "}
                      {heroi.powerstats.intelligence}
                    </Item>
                    <Item>
                      <SubTitulo>Força:</SubTitulo> {heroi.powerstats.strength}
                    </Item>
                    <Item>
                      <SubTitulo>Velocidade:</SubTitulo>{" "}
                      {heroi.powerstats.speed}
                    </Item>
                    <Item>
                      <SubTitulo>Durabilidade:</SubTitulo>{" "}
                      {heroi.powerstats.durability}
                    </Item>
                    <Item>
                      <SubTitulo>Poder:</SubTitulo> {heroi.powerstats.power}
                    </Item>
                    <Item>
                      <SubTitulo>Combate:</SubTitulo> {heroi.powerstats.combat}
                    </Item>
                    <Item>
                      <SubTitulo>Raça:</SubTitulo> {heroi.appearance.race}
                    </Item>
                    <Item>
                      <SubTitulo>Alter ego:</SubTitulo>{" "}
                      {heroi.biography.alterEgos}
                    </Item>
                    <Item>
                      <SubTitulo>Aliases:</SubTitulo> {heroi.biography.aliases}
                    </Item>
                  </Estatistica>
                </ContainerDois>
                <ContainerTres>
                  <Estatistica>
                    <Item>
                      <SubTitulo>Local de nascimento:</SubTitulo>{" "}
                      {heroi.biography.placeOfBirth}
                    </Item>
                    <Item>
                      <SubTitulo>Primeira aparição:</SubTitulo>{" "}
                      {heroi.biography.firstAppearance}
                    </Item>
                    <Item>
                      <SubTitulo>Editora:</SubTitulo>{" "}
                      {heroi.biography.publisher}
                    </Item>
                    <Item>
                      <SubTitulo>Ocupação:</SubTitulo> {heroi.work.occupation}
                    </Item>
                    <Item>
                      <SubTitulo>Base:</SubTitulo> {heroi.work.base}
                    </Item>
                    <Item>
                      <SubTitulo>Grupos afiliados:</SubTitulo>{" "}
                      {heroi.connections.groupAffiliation}
                    </Item>
                  </Estatistica>
                </ContainerTres>
              </Container>
            </DivTwo>
            <Card>
              <CardImagem>
                <Img src={heroi.images.md}></Img>
              </CardImagem>
            </Card>
          </Div>
        </>
      )}
    </>
  );
};
