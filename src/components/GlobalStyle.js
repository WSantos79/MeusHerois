import { createGlobalStyle } from "styled-components";
import {corPrimaria, corTexto} from "./UI/variaveis"


export const GlobalStyle = createGlobalStyle`
	
body {
	@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
	
	font-family: 'Source Sans Pro', sans-serif;

	background: ${corPrimaria};
	color: ${corTexto};
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  
`