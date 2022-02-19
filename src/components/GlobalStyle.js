import { createGlobalStyle } from "styled-components";
import {corPrimaria, corTexto} from "./UI/variaveis"

export const GlobalStyle = createGlobalStyle`

body {
	@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
	
	font-family: 'Source Sans Pro', sans-serif;

	background-image:	
    linear-gradient(gray, gray),
    //url('fundo.webp');

	background-blend-mode: saturation;   
	background-size: auto 40rem;
	background: ${corPrimaria};
	color: ${corTexto};
}

`