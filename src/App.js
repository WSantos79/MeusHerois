import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Cabecalho from './components/Cabecalho';
import { GlobalStyle } from './components/GlobalStyle';
import ListaXman from './components/ListaXman';
import MeuHeroi from './components/MeuHeroi';
import { SeeHeroProvider } from './commom/context/SeeHero';
import ListaJusticeL from './components/ListaJusticeL';
import ListaAvengers from './components/ListaAvengers';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Cabecalho />
        <SeeHeroProvider>
          <MeuHeroi />
          <ListaXman />
          <ListaJusticeL />
          <ListaAvengers />
        </SeeHeroProvider>
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