import React, { useEffect, useState, useRef } from "react";
import { busca, meuHeroi } from "../../api/api";
import styled from "styled-components";
import { Div, DivTwo, Container, ContainerUm, ContainerDois, ContainerTres, Titulo, SubTitulo, Estatistica, Item, Card, CardImagem, Img } from "../UI";
import appConfig from "../../config.json"

export default () => {
  
  const [heroi, setHeroi] = useState({});
  const [digitado, setDigitado] = useState('');
  const [novoNumero, setNovoNumero] = useState(0)
  const firstUpdate = useRef(true);

  useEffect(() => {
    const n = Math.floor(Math.random() * 562);
    const id = appConfig.idExistente[n];
    // batman 70
    // nomeGrande 636
    // grande aliase 584
    // grande 75
    // wolverine 717
    meuHeroi(setHeroi, id);
  }, []);
  //useEffect(() => {    
  //  meuHeroi(setHeroi, novoNumero);
  //}, [novoNumero]);
 // function buscar() {
 //   busca(digitado, setHeroi);
 ////  busca(digitado, setNovoNumero)
 // }

  useEffect(() => {    
    if (firstUpdate.current) {
      firstUpdate.current = false;
      //busca(digitado);  
     // console.log('fui executado aqui')
    }
  //  console.log('to aqui')
    busca(digitado, setHeroi);
  //  console.log(count);  
  }, [digitado]);   

  const Input = styled.input`
    display: flex;
    margin: 1rem auto;
    width: 40rem;
    height: 2rem;
  `;
    
  return (
    <>
      {heroi.id && (
        <>
          <Input onKeyPress={(e) => {
           if(e.key === "Enter"){
              e.preventDefault();                          
              console.log('apertei')
              setDigitado(e.target.value);

              console.log(e.target.value);
              //console.log(novoNumero)
            //  buscar();
            }
          }} type="search" placeholder="Busque seu Herói"></Input>
          {  console.log(novoNumero)  }
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

/*
<Item><SubTitulo>Parentes:</SubTitulo> {heroi.connections.relatives}</Item>              


  <div>
            <img src={heroi.images.md}></img>
            <p>{heroi.name}</p>
          </div>

{heroi.map((heroi) => {
        return (
          <></>
          // console.log(dado.name)
        );
      })}






{dado.map((dado) => {
        return (
          <>
            <img src={dado.images.lg}></img>
            <p>{dado.name}</p>
          
          
          </>
         // console.log(dado.name)
        )
      })}




{console.log(dado.name.includes('Adam'), dado.name)}
 TENTAR USAR TERNARIO PARA BUSCA
color: ${(props) => props.primary ? corPrimaria : "white"}







{dado.map((dado) => {
        return (
          <>
            <div key={dado.id}>
              <img src={dado.thumbnail.path + ".jpg"}></img>
              <p>{dado.name}</p>
              
              {console.log(dado)}
            </div>
          </>
        );
      })}

*/
