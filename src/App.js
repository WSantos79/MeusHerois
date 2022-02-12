import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Cabecalho from './components/Cabecalho';
import { GlobalStyle } from './components/GlobalStyle';
import MeuHeroi from './components/MeuHeroi';

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Cabecalho/>
        <MeuHeroi/>
      </BrowserRouter>
    </>
  );
}

export default App;


/*

<Switch>
          
<PaginaInicial />
        </Switch>


        */