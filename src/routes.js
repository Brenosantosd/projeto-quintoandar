import { BrowserRouter, Routes , Route } from "react-router-dom";


import Header from "./Components/Header/index.js"
import Detalhes from "./pages/Detalhes/index.js"
import Favoritos from "./pages/Favoritos/index.js"
import Home from "./pages/Home/index.js"
import Agendamentos from "./pages/Agendamento/index.js"
import Erro from "./pages/Erro/index.js"
import Footer from "./Components/Footer/index.js"




function RoutesApp(){
    return(

       <BrowserRouter>
       <div className="app-container">
       <Header/>
       <div className="main-content">
       <Routes>
     <Route path = "/" element = {<Home/>}/>
     <Route path = "/detalhes/:id" element = {<Detalhes/>}/>
     <Route path = "/favoritos" element = {<Favoritos/>}/>
     <Route path = "/agendamentos" element = {<Agendamentos/>}/>
     <Route path = "*" element = {<Erro/>}/>
       </Routes> 
       </div> 
       <Footer/> 
      </div>    
       </BrowserRouter>
    )
}


export  default RoutesApp; 