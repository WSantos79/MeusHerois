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
  
  scrollbar-width: thin;
  scrollbar-color: ${corPrimaria} ${corPrimaria};
}

/* Works on Firefox */

/* Works on Chrome, Edge, and Safari */
body::-webkit-scrollbar {
  width: 0px;
}

body::-webkit-scrollbar-track {
  background: ${corPrimaria};
}

body::-webkit-scrollbar-thumb {
  background-color: ${corPrimaria};
  border-radius: 0px;
  border: 0px solid ${corPrimaria};
}


`