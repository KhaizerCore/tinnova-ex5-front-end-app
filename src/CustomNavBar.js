import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'react-bootstrap';
import './CustomNavBar.css';

import { Link } from 'react-router-dom';

const CustomNavBar = () => {
    return(
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light">     
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className = "navbar-nav mr-auto">
                
                <li className="nav-item active">
                    <Link to="/">
                        <h3>Home</h3>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/cadastrar-veiculo">
                        <h3>Cadastrar</h3>
                    </Link>
                </li>

                <li className="nav-item active">
                    <Link to="/atualizar-veiculo">
                        <h3>Atualizar</h3>
                    </Link>
                </li>

                <li className="nav-item active">
                    <Link to="/excluir-veiculo">
                        <h3>
                            Excluir
                        </h3>
                    </Link>
                </li>

                <li className="nav-item active">
                    <Link to="/informacoes-veiculo">
                        <h3>
                            Informações
                        </h3>
                    </Link>
                </li>
            </ul>
            </div>
        </Navbar>
    );
}
export default CustomNavBar;