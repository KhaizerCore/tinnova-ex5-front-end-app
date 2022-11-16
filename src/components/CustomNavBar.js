import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'react-bootstrap';
import '../style/CustomNavBar.css';

import { Link } from 'react-router-dom';

import carLogo from '../assets/car.png'
import tinnovaLogo from '../assets/logo_dark.png'

const CustomNavBar = () => {
    return(
        <Navbar className = "navbar-element">     
            <div>
            <ul className = "navbar-nav mr-auto">
                <li className = "tinnova-logo-li">
                    <div>
                    <img className = "tinnova-logo" src = {tinnovaLogo}/>
                    </div>
                </li>
                <li className = "car-logo-li">
                    <div>
                        <img className = "car-logo" src = {carLogo}/>
                    </div>
                </li>

                <li className="nav-item active">
                    <Link className = "nav-link" to="/">
                        <h3>Home</h3>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className = "nav-link" to="/cadastrar-veiculo">
                        <h3>Cadastrar</h3>
                    </Link>
                </li>

                <li className="nav-item active">
                    <Link className = "nav-link" to="/atualizar-veiculo">
                        <h3>Atualizar</h3>
                    </Link>
                </li>

                <li className="nav-item active">
                    <Link className = "nav-link" to="/excluir-veiculo">
                        <h3>
                            Excluir
                        </h3>
                    </Link>
                </li>

                <li className="nav-item active">
                    <Link className = "nav-link" to="/informacoes-veiculo">
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