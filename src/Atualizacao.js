import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import './Atualizacao.css';

const Atualizacao = () => {
    const handleSubmit = event => {
        
        event.preventDefault();

        const url = `http://localhost:8080/veiculos/${event.target.input_id.value}`;        
        
        if (event.target.input_id.value != ""){
            if (
                event.target.input_veiculo_checkbox.checked &&
                event.target.input_marca_checkbox.checked &&
                event.target.input_ano_checkbox.checked &&
                event.target.input_descricao_checkbox.checked &&
                event.target.input_vendido_checkbox.checked &&
                event.target.input_cor_checkbox.checked
            ){ // CASO TODOS OS CHECKBOX ESTEJAM SELECIONADOS, VAMOS ATUALIZAR TUDO UTILIZANDO "PUT"
                
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
        
                request.open('PUT', url);
                request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'); //Obrigatorio API
                // request.setRequestHeader('Access-Control-Allow-Origin', '*');
                request.send(JSON.stringify(payload));
    
            }else{ // CASO QUE TODOS OS CHECKBOX NAO ESTEJAM SELECIONADOS, VAMOS ATUALIZAR APENAS OS SELECIONADOS UTILIZANDO "PATCH"
                let payload = {};
                if (event.target.input_veiculo_checkbox.checked) payload['veiculo'] = event.target.input_veiculo.value;
                if (event.target.input_marca_checkbox.checked) payload['marca'] = event.target.input_marca.value;
                if (event.target.input_ano_checkbox.checked) payload['ano'] = event.target.input_ano.value;
                if (event.target.input_descricao_checkbox.checked) payload['descricao'] = event.target.input_descricao.value;
                if (event.target.input_vendido_checkbox.checked) payload['vendido'] = event.target.input_vendido.checked;
                if (event.target.input_cor_checkbox.checked) payload['cor'] = event.target.input_cor.value;
        
                let request = new XMLHttpRequest();
                request.onreadystatechange = ()=>{
                    if (request.readyState === XMLHttpRequest.DONE){
                        if (request.status === 200){
                            console.log('sucesso');
                        }
                    }
                };
        
                request.open('PATCH', url);
                request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'); //Obrigatorio API
                // request.setRequestHeader('Access-Control-Allow-Origin', '*');
                request.send(JSON.stringify(payload));
            }
        }
    };

    return (
        <div class = "body-content">
            <form class = "form-generico" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="input_id">ID</label>
                    <input type="number" 
                        className="form-control" 
                        id="input_id" 
                        placeholder="ID do veiculo" 
                    ></input>
                </div>
                <div className="form-group">
                    <label for="input_veiculo">Veiculo</label>
                    <input type="text" 
                        className="form-control" 
                        id="input_veiculo" 
                        placeholder="Nome do veiculo" 
                    ></input>
                    <input type="checkbox" 
                        className="form-check-input" 
                        id="input_veiculo_checkbox"
                    ></input>
                </div>
                <div className="form-group">
                    <label for="input_marca">Marca</label>
                    <input type="text" 
                        className="form-control" 
                        id="input_marca" 
                        placeholder="marca"
                    ></input>
                    <input type="checkbox" 
                        className="form-check-input" 
                        id="input_marca_checkbox"
                    ></input>
                </div>
                <div className="form-group">
                    <label for="input_ano">Ano</label>
                    <input type="number" 
                        className="form-control" 
                        id="input_ano" 
                        placeholder="ano"
                    ></input>
                    <input type="checkbox" 
                        className="form-check-input" 
                        id="input_ano_checkbox"
                    ></input>
                </div>
                <div className="form-group">
                    <label for="input_descricao">Descrição</label>
                    <input type="text" 
                        className="form-control" 
                        id="input_descricao" 
                        placeholder="descrição"
                    ></input>
                    <input type="checkbox" 
                        className="form-check-input" 
                        id="input_descricao_checkbox"
                    ></input>
                </div>
                <div className="form-group">
                    <label className="form-check-label" for="input_vendido">Vendido</label>
                    <input type="checkbox" 
                        className="form-check-input" 
                        id="input_vendido"
                    ></input>     
                    <p></p>
                    <input type="checkbox" 
                        className="form-check-input" 
                        id="input_vendido_checkbox"
                    ></input>  
                    
                </div>
                <div className="form-group">
                        <label for="input_cor">Cor</label>
                        <input type="text" 
                            className="form-control" 
                            id="input_cor" 
                            placeholder="cor"
                        ></input>
                        <input type="checkbox" 
                            className="form-check-input" 
                            id="input_cor_checkbox"
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
export default Atualizacao;