import React , {useState , useEffect} from "react"; 
import {Link} from "react-router-dom"
import "./agendamento.css"



function Agendamento(){

const [agendamentos , setAgendamentos] = useState([]); 
   
   // Carregar os agendamentos que estavam salvos no localStorage
 useEffect(()=> {

  const salvos = localStorage.getItem("@quintoimoveis:agendamentos");
    const listaAgendamentos = salvos ? JSON.parse(salvos) : [];

    setAgendamentos(listaAgendamentos)

 } , [])

function cancelarAgendamento(id){

   // Cancelar ou remover um agendamento 
    const novaLista = agendamentos.filter((imovel) => imovel.id !== id)

    setAgendamentos(novaLista)

    // Agora atualizar o Local Storage

    localStorage.setItem("@quintoimoveis:agendamentos" , JSON.stringify(novaLista))

}

    return(
        <div className="container-agendamentos">
            <h1 className="titulo-agendamentos">Agendamentos</h1>
         
          {agendamentos.length === 0 ?(
        <div className="sem-agendamentos-agendamento">
            <p> Ops, nenhum imóvel favoritado...</p>
            <img className="capa-ilustracao-favoritos-2" src="/ilustracao2.jpg"/>
            <Link to="/" className="btn-detalhes"> ← Explorar Imóveis</Link>
        </div>
          ) : (
             <div className="container-imoveis-agendados">
                 {agendamentos.map((imovel) =>{
                 return (
                     <div key = {imovel.id} className="card-imovel">
                        <img src = {imovel.img} alt = {imovel.titulo} className="capa-imovel" />
                         <h2 className="titulo-Agendamentos">{imovel.titulo}</h2> 
                         <p>Bairro: {imovel.bairro}</p>
                         <p>Aluguel + Condomínio : <span className="precos">{imovel.precoAluguel + imovel.condominio}</span> </p>

                         <div className="acoes-agendamentos">
                              <Link to = {`/detalhes/${imovel.id}`}>Ver Detalhes</Link>         
                              <button onClick = {()=> cancelarAgendamento(imovel.id)}>Remover</button>
                         </div>
                    </div>
                   )
                 })}
             </div>           
             )}
        </div>
       );
     }


export default Agendamento;