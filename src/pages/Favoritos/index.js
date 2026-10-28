import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imoveisMock from "../../data/imoveis";
import "./favoritos.css";
import ilustracao2 from '../../assets/ilustracao2.jpg';

function Favoritos() {
  const [imoveisFavoritos, setImoveisFavoritos] = useState([]);

  // Toda vez que a página carrega, lê o localStorage
  useEffect(() => {
    const salvos = localStorage.getItem("@quintoimoveis:favoritos");
    const idsSalvos = salvos ? JSON.parse(salvos) : [];

    // Filtra no mock apenas os imóveis cujos IDs estão favoritados
    const listaFiltrada = imoveisMock.filter((imovel) =>
      idsSalvos.includes(imovel.id)
    );

    setImoveisFavoritos(listaFiltrada);
  }, []);

  // Função para remover um favorito diretamente desta página
  function removerFavorito(id) {
    const salvos = localStorage.getItem("@quintoimoveis:favoritos");
    const idsSalvos = salvos ? JSON.parse(salvos) : [];

    const novosIds = idsSalvos.filter((favId) => favId !== id);
    localStorage.setItem("@quintoimoveis:favoritos", JSON.stringify(novosIds));

    // Atualiza a tela
    setImoveisFavoritos(imoveisFavoritos.filter((item) => item.id !== id));
  }

  function salvarAgendamento(imovel){
     // Busca os agendamentos já salvos
   const salvos = localStorage.getItem("@quintoimoveis:agendamentos");
   const agendamentosAtuais = salvos ?  JSON.parse(salvos) : [];

    // Verifica se o imóvel já não foi agendado anteriormente para não duplicar

    const jaAgendado = agendamentosAtuais.some((item) => item.id === imovel.id);
       if(jaAgendado){
        alert("Esse imóvel já está na sua lista de agendamentos!")
        return;
      }
   // Adicionar o novo imóvel a lista de agendamentos
      const novaLista = [...agendamentosAtuais , imovel]
      alert("Salvo aos favoritos com sucesso !")

   // Salva no LocalStorage Novamente !!!   

   localStorage.setItem("@quintoimoveis:agendamentos" , JSON.stringify(novaLista))

   
   
      
  }

  return (
    <div className="container-favoritos">
      <h1 className="tituloFavoritos">Favoritos</h1>

      {imoveisFavoritos.length === 0 ? (
        <div className="sem-favoritos">
          <p> Ops, nenhum imóvel favoritado...</p>
          <img className="capa-ilustracao-favoritos" src={ilustracao2}/>
          <Link to="/" className="btn-detalhes"> ← Explorar Imóveis</Link>
        </div>
      ) : (
        <div className="containerImoveis">
          {imoveisFavoritos.map((imovel) => (
            <div key={imovel.id} className="card-imovel">
              <img src={imovel.img} alt={imovel.titulo} className="capa-imovel" />
              <h2>{imovel.titulo}</h2>
              <p>Bairro: {imovel.bairro}</p>
              <p>Aluguel + Condomínio: R$ {imovel.precoAluguel + imovel.condominio}</p>

              <div className="acoes-card-favoritos">
                <Link className="btn-detalhes-favoritos" to={`/detalhes/${imovel.id}`}>
                  Ver Detalhes
                </Link>
                <button
                  onClick={() => removerFavorito(imovel.id)}
                  className="btn-remover-favoritos"
                >
                  Remover 
                </button>
                <button onClick = {()=> salvarAgendamento(imovel)} className="btn-salvar-agendamento">Agendar Visita</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;