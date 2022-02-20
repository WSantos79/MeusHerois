import styled from 'styled-components';
import { corBanner } from '../UI/variaveis';


export const Cabecalho = styled.div`
    display:flex;
    justify-content: center;
    height: 9rem;    
    overflow: hidden;
    background: ${corBanner};  
        
`
export const Banner = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');   
   
   
    align-self: center;
  //  line-height: 10rem;

    font-size: 120px;
    font-family: 'Shizuru', cursive;
    font-weight: 1000;
    
    //background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstaticmobly.akamaized.net%2Fp%2FRM-Adesivos-Adesivo-de-Parede---Azulejos-super-herC3B3is-443-6311-581112-1-product.jpg&f=1&nofb=1');
    background-image:	url('fundo-banner.jpg');
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`