import React from 'react';
import { Button, Navbar } from 'react-bootstrap';

const Exclusao = () => {

    const handleSubmit = event => {
        event.preventDefault();

        const url = `http://localhost:8080/veiculos/${event.target.input_id.value}`;        
        
        if (event.target.input_id.value != ""){
            let request = new XMLHttpRequest();
            request.onreadystatechange = ()=>{
                if (request.readyState === XMLHttpRequest.DONE){
                    if (request.status === 200){
                        console.log('sucesso');
                    }
                }
            };
    
            request.open('DELETE', url);
            request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'); //Obrigatorio API
            // request.setRequestHeader('Access-Control-Allow-Origin', '*');
            request.send();
        }
    }

    return(
        <div class = "body-content">
            <form class = "form-generico" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="input_id">ID</label>
                    <input type="number" 
                        className="form-control" 
                        id="input_id" 
                        placeholder="ID do veiculo a ser removido" 
                    ></input>
                </div>

                <button type="submit" 
                    className="btn btn-primary" 
                >Submit</button>
            </form>
        </div>
    );
}
export default Exclusao;