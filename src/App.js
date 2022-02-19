import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Cabecalho from './components/Cabecalho';
import { GlobalStyle } from './components/GlobalStyle';
import ListaXman from './components/ListaXman';
import MeuHeroi from './components/MeuHeroi';

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Cabecalho/>
        <MeuHeroi/>
        <ListaXman/>
        <ListaXman/>
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