import React from 'react';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'react-bootstrap';

import CustomNavBar from './components/CustomNavBar';
import Cadastro from './components/Cadastro';
import Atualizacao from './components/Atualizacao';
import Exclusao from './components/Exclusao';
import Informacoes from './components/Informacoes';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <Router>
        <div className="App">
        <header>
            <CustomNavBar/>          
        </header>
        <div className = "content">
          <Switch>
            <Route exact path = "/">
              <div><h1>Bem vindo(a) à homepage, utilize os serviços pela navbar acima</h1></div>
            </Route>
            <Route exact path = "/cadastrar-veiculo">
                <Cadastro/>
            </Route>
            <Route exact path = "/atualizar-veiculo">
                <Atualizacao/>
            </Route>
            <Route exact path = "/excluir-veiculo">
                <Exclusao/>
            </Route>
            <Route exact path = "/informacoes-veiculo">
                <Informacoes/>
            </Route>
          </Switch>
          {/* <Cadastro/> */}
        </div>
        <footer>
          <div></div>
        </footer>
      </div>
    </Router>
    
  );
}

export default App;
