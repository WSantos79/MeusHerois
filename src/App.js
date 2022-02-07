import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Cabecalho from './components/Cabecalho';
import PaginaInicial from './pages';

function App() {
  return (
    <>

      <BrowserRouter>
      <PaginaInicial />
        
      </BrowserRouter>
    </>
  );
}

export default App;


/*

<Switch>
          

        </Switch>


        */