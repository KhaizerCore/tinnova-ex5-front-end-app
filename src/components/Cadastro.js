import {useState} from 'react';

import '../style/Cadastro.css';

const Cadastro = () => {


    const handleSubmit = event => {
        

        console.log('handleSubmit ran');
        event.preventDefault(); // 👈️ prevent page refresh

        // 👇️ access input values here
        console.log('veiculo 👉️', event.target.input_veiculo.value);
        console.log('marca 👉️', event.target.input_marca.value);
        console.log('ano 👉️', event.target.input_ano.value);
        console.log('descricao 👉️', event.target.input_descricao.value);
        console.log('vendido 👉️', event.target.input_vendido.checked);
        console.log('cor 👉️', event.target.input_cor.value);


        const url = "http://localhost:8080/veiculos";
        
        const payload = {
            veiculo : event.target.input_veiculo.value,
            marca : event.target.input_marca.value,
            ano : event.target.input_ano.value,
            descricao : event.target.input_descricao.value,
            vendido : event.target.input_vendido.checked,
            cor : event.target.input_cor.value,
        } 

        let request = new XMLHttpRequest();
        request.onreadystatechange = ()=>{
            if (request.readyState === XMLHttpRequest.DONE){
                if (request.status === 200){
                    console.log('sucesso');
                }
            }
        };

        request.open('POST', url);
        request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'); //Obrigatorio API
        // request.setRequestHeader('Access-Control-Allow-Origin', '*');
        request.send(JSON.stringify(payload));
    };

    return (
        <div class = "body-content">
            <form class = "form-generico" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="input_veiculo">Veiculo</label>
                    <input type="text" 
                        className="form-control" 
                        id="input_veiculo" 
                        placeholder="Nome do veiculo" 
                    ></input>
                </div>
                <div className="form-group">
                    <label for="input_marca">Marca</label>
                    <input type="text" 
                        className="form-control" 
                        id="input_marca" 
                        placeholder="marca"
                    ></input>
                </div>
                <div className="form-group">
                    <label for="input_ano">Ano</label>
                    <input type="number" 
                        className="form-control" 
                        id="input_ano" 
                        placeholder="ano"
                    ></input>
                </div>
                <div className="form-group">
                    <label for="input_descricao">Descrição</label>
                    <input type="text" 
                        className="form-control" 
                        id="input_descricao" 
                        placeholder="descrição"
                    ></input>
                </div>
                <div className="form-check">
                    <label className="form-check-label" for="input_vendido">Vendido</label>
                    <input type="checkbox" 
                        className="form-check-input" 
                        id="input_vendido"
                    ></input>       
                </div>
                <div className="form-group">
                        <label for="input_cor">Cor</label>
                        <input type="text" 
                        className="form-control" 
                        id="input_cor" 
                        placeholder="cor"
                    ></input>
                </div>     
                <p></p>           
                <button type="submit" 
                    className="btn btn-primary" 
                >Submit</button>
            </form>
        </div>
    );
}

export default Cadastro;