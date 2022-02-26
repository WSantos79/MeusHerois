import styled from "styled-components";
import { corBanner } from "../UI/variaveis";


export const Rodape = styled.footer`
display:flex;
justify-content: center;
align-items: center;
height: 5rem;
background: ${corBanner};
margin-top: 1.5rem;
font-size: 1.2em; 
font-weight: 500;

@media (max-width: 480px) {        
    font-size: 1em;

    @media (max-width: 480px) {        
        & > p:first-child  {
            margin: 0 1rem;
        }
        & > a:last-child  {
            margin: 0 1rem;
        }
    }
       
 }
`

export const Span = styled.span`
    color: red;

`

export const Link = styled.a`
    margin-left: 10px;
    
`
export const Social = styled.img`
    width: 35px;
    &:hover {
        filter: invert(0.07);
    }
`