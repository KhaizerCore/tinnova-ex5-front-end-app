import React, { useEffect, useState } from 'react';
import { Button, Navbar } from 'react-bootstrap';

import BasicCard from './BasicCard';

import '../style/Informacoes.css';

const Informacoes = () => {

    function getQtdVeiculosNaoVendidos(allVehicles){
        let qtd = 0;
        allVehicles.forEach((vehicle, idx) => {
            if (vehicle.vendido === false) qtd += 1;
        });
        return qtd;
    }

    function getQtdVeiculosDecadaFabr(allVehicles){
        let qtdPorDecada = {};
        allVehicles.forEach((vehicle, idx) => {
            let decada = String(vehicle.ano).slice(0,-1) + "0";
            if (qtdPorDecada[decada] === undefined) qtdPorDecada[decada] = 1;
            else qtdPorDecada[decada] += 1;
        });
        return JSON.stringify(qtdPorDecada);
    }

    function getQtdVeiculosPorFabr(allVehicles){
        let qtdPorFabr = {};
        allVehicles.forEach((vehicle, idx) => {
            let fabricante = vehicle.marca;
            if (qtdPorFabr[fabricante] === undefined) qtdPorFabr[fabricante] = 1;
            else qtdPorFabr[fabricante] += 1;
        });
        return JSON.stringify(qtdPorFabr);
    }

    function getQtdRegistradosUltimaSemana(allVehicles){
        let qtd = 0;
        
        const agora = new Date();

        allVehicles.forEach((vehicle, idx) => {
            const antes = new Date(vehicle.created);
            const msEntreDatas = Math.abs(antes.getTime() - agora.getTime());
            const diasEntreDatas = msEntreDatas / (24 * 60 * 60 * 1000);
            if (diasEntreDatas >= 0 && diasEntreDatas <= 7) qtd+=1;
        });
        return qtd;
    }

    // const [allVehicles, setVehicles] = useState(null);
    const [qtdVeiculosNaoVendidos, setQtdVeiculosNaoVendidos] = useState(null);
    const [qtdVeiculosDecadaFabr, setQtdVeiculosDecadaFabr] = useState(null);
    const [veiculosPorFabricante, setVeiculosPorFabr] = useState(null);
    const [veiculosUltimaSemana, setVeiculosUltimaSemana] = useState(null);

    useEffect(() =>{

        const url = `http://localhost:8080/veiculos`;        
        
        let request = new XMLHttpRequest();
        request.onreadystatechange = ()=>{
            if (request.readyState === XMLHttpRequest.DONE){
                if (request.status === 200){
                    const allVehicles = JSON.parse(request.response);
                    console.log('sucesso', allVehicles);
                    setQtdVeiculosNaoVendidos(getQtdVeiculosNaoVendidos(allVehicles));
                    setQtdVeiculosDecadaFabr(getQtdVeiculosDecadaFabr(allVehicles));
                    setVeiculosPorFabr(getQtdVeiculosPorFabr(allVehicles));
                    setVeiculosUltimaSemana(getQtdRegistradosUltimaSemana(allVehicles));
                }
            }
        };

        request.open('GET', url);
        request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'); //Obrigatorio API
        // request.setRequestHeader('Access-Control-Allow-Origin', '*');
        request.send();

    }, []);


    return(
        <div>
            {/* <div className="div-titulo-informacoes">
                <h2>
                    Informações dos veículos
                </h2>
            </div> */}
            <div className = "div-conteudo-informacoes">
                <ul className = "lista-informacoes">
                    <li className = "elemento-info">
                        <div>
                            <BasicCard title={qtdVeiculosNaoVendidos} description="Quantidade de veículos não vendidos"/>                            
                        </div>
                    </li>
                    <li className = "elemento-info">
                        <div>
                            <BasicCard title={qtdVeiculosDecadaFabr} description="Quantidade de veículos por década de fabricação"/>                          
                        </div>
                    </li>
                    <li className = "elemento-info">
                        <div>
                            <BasicCard title={veiculosPorFabricante} description="Distribuição de veículos por fabricante"/>                      
                        </div>
                    </li>
                    <li className = "elemento-info">
                        <div>
                            <BasicCard title={veiculosUltimaSemana} description="Carros registrados na última semana"/>                         
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Informacoes;