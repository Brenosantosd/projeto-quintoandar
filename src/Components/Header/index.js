import React , {useState , useEffect} from "react";
import {Link} from "react-router-dom";
import "./header.css";




function Header(){


const [data, setData] = useState("00/00/00")
const [hora, setHora] = useState("00:00:00")


useEffect(()=> {

   const dataHoje = new Date().toLocaleDateString()
   setData(dataHoje)

   
   
  const intervalo = setInterval(()=>{
      const horaAtual = new Date().toLocaleTimeString()
         setHora(horaAtual)
   },1000)
  
   // Função de limpeza !
  return ()=>  clearInterval(intervalo)

} , [])  //Array vazio significa que o UseEffect executa somente uma vez quando é montado o Componente

    return(
        <header>
            <div className="containerLogoeTitulo">
                <img className="logo" src = "/logoQuinto.png"/>
            <h1 className="tituloQuintoAndar">QuintoAndar 1.0</h1>
            </div>
          <div className="containerHoraeData">
           <p className="data">{data}</p>  
           <p className="hora">{hora}</p>
          </div> 
          <div className="navegacao">
           <Link className="home" to = "/">Home</Link>
           <Link  className= "agendamentos"to = "/agendamentos">Agendamentos</Link>
           <Link className= "favoritos"to = "/favoritos/">Favoritos</Link>
           </div> 
         

        </header>
    )
}

export default Header;  