import { createGlobalStyle } from "styled-components";
import {corPrimaria, corTexto} from "./UI/variaveis"

export const GlobalStyle = createGlobalStyle`

body {
	background: ${corPrimaria};
	color: ${corTexto};

  font-family: 'Source Sans Pro', sans-serif;

  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  
}

`