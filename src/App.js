import { BrowserRouter, Route } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import ListaXman from './components/ListaXman';
import MeuHeroi from './components/MeuHeroi';
import { SeeHeroProvider } from './commom/context/SeeHero';
import ListaJusticeL from './components/ListaJusticeL';
import ListaAvengers from './components/ListaAvengers';
import Rodape from './components/Rodape';
import { GlobalStyle } from './components/GlobalStyle';

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
        <Cabecalho />
        <SeeHeroProvider>
          <MeuHeroi />
          <ListaXman />
          <ListaJusticeL />
          <ListaAvengers />
        </SeeHeroProvider>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;