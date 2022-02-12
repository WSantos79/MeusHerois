import { createGlobalStyle } from "styled-components";
import {corFundo} from "./UI/variaveis"

export const GlobalStyle = createGlobalStyle`

body {
	background-image:	
    linear-gradient(gray, gray),
    //url('fundo.webp');

	background-blend-mode: saturation;   
	background-size: auto 40rem;
	background: ${corFundo};
}

`