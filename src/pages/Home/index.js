import React , {useState , useEffect , useMemo ,} from "react";
import imoveisMock from "../../data/imoveis.js"
import Filtros from "../../Components/Filtros/index.js"
import "./home.css"
import {Link} from "react-router-dom"



function Home(){

const [busca, setBusca] = useState("")
const [precoMaximo , setPrecoMaximo] = useState("")
const [quartos , setQuartos] = useState("")
const [pets , setPets] = useState(false)
const imoveisFiltrados = useMemo(()=>{
    return imoveisMock.filter((imovel)=>{

    // Regra da Busca por texto (Título ou Bairro)

      const bateTexto =
        imovel.titulo.toLocaleLowerCase().includes(busca.toLocaleLowerCase()) ||
        imovel.bairro.toLocaleLowerCase().includes(busca.toLocaleLowerCase());

    // Lógica do preço Máximo (Aluguel + Condomínio)
         
        const valorTotal = imovel.precoAluguel + imovel.condominio;
        const batePreco = !precoMaximo || valorTotal <= Number(precoMaximo)
   

    // Lógica da regra de quantidade de Quartos
       
        const bateQuartos = !quartos || imovel.quartos === Number(quartos); 

    // Lógica dos Pets

        const batePets = !pets || imovel.pets === true; 

        //Retorna true apenas se ássar em todas as validações

        return bateTexto && batePreco && bateQuartos && batePets; 
      }) 
} , [busca , precoMaximo , quartos , pets , imoveisMock])

    return(
        <div className="homecontainer">
             <Filtros busca ={busca}
                      setBusca = {setBusca}
                      precoMaximo = {precoMaximo}
                      setPrecoMaximo={setPrecoMaximo}
                      quartos={quartos}
                      setQuartos={setQuartos}
                      pets={pets}
                      setPets={setPets}/>        
                                            
           <h1>Imóveis Disponíveis</h1>

           <div className="containerImoveis">
               {imoveisFiltrados.map((imovel)=>{
           return <div key = {imovel.id} className="card-imovel">
                   <img src = {imovel.img} alt = {imovel.titulo} className="capa-imovel"/>
                   <h2>{imovel.titulo}</h2>
                   <p>Bairro: {imovel.bairro}</p>
                   <p>Preço: {imovel.precoAluguel}</p>
                   <p>Aluguel + Condomínio: R${imovel.precoAluguel + imovel.condominio}</p>
                   <Link className="btn-detalhes-Home" to = {`/detalhes/${imovel.id}`}>Ver Detalhes</Link>
               </div>
               })}

           </div>

        </div>
    )
}


export default Home;