import styled from 'styled-components';
import { corBanner } from '../UI/variaveis';


export const Cabecalho = styled.div`
    display:flex;
    justify-content: center;
    height: 9rem;    
    overflow: hidden;
    background: ${corBanner};

    @media (max-width: 480px) {        
        height: 6rem;
      }
        
`
export const Banner = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');   
   
   
    align-self: center;

    font-size: 120px;
    font-family: 'Shizuru', cursive;
    font-weight: 100px;    
    
    background-image:	url('fundo-banner.jpg');
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 480px) {        
        font-size: 60px;
      }
`