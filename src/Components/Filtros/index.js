import React from "react"; 
import "./filtros.css"



function Filtros({
   busca,
   setBusca,
   precoMaximo,
   setPrecoMaximo,
   quartos,
   setQuartos,
   pets,
   setPets
}){
    return(
        <div className="container-formulario">
           <form>
           <label>Busca: </label>
            <input className="busca" type="text" value = {busca} onChange={(e)=> setBusca(e.target.value)}/>
            <label>Valor total até: </label>
           <select className="precoMaximo" value = {precoMaximo} onChange={(e)=> setPrecoMaximo(e.target.value)}>
             <option value = "">Todos</option>
             <option value = "1000">R$ 1.000,00</option>
             <option value = "2000">R$ 2.000,00</option>
             <option value = "3000">R$ 3.000,00</option>
             <option value = "4000">R$ 4.000,00</option>
             <option value = "5000">R$ 5.000,00</option>
             <option value = "6000">R$ 6.000,00</option>
             <option value = "14000">R$ 14.000,00</option>
             <option value = "21000">R$ 21.000,00</option>
           </select>
           <label>Quartos: </label>
           <select className="quartos" value = {quartos} onChange={(e)=> setQuartos(e.target.value)}> 
             <option value ="">Todos</option>
             <option value = "1">1+</option>
             <option value = "2">2+</option>
             <option value = "3">3+</option>
           </select>
           <label>Pets: </label>
           <input className="pets" type="checkbox" checked = {pets} onChange = {(e)=> setPets(e.target.checked)}/>
           </form>

           <button>Buscar Imóveis</button>
        </div>
    )
}


export default Filtros;