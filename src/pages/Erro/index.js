import React from "react"; 
import "./erro.css"
import {Link} from "react-router-dom"



function Erro(){
    return(
         <div className="pagina-Nao-Encontrada">
              <h1>404</h1>
              <p>Ops, Página não encontrada !</p>
              <Link className="Erroacao-Btn" to = "/">Voltar para a Home</Link>
       
        </div>
    )
}


export default Erro;