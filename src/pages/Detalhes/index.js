import React, { useState } from "react"; 
import { useParams, useNavigate, Link } from "react-router-dom";
import "./detalhes.css";
import imoveisMock from "../../data/imoveis.js";

function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 1. Inicializa o estado lendo do localStorage
  const [favoritos, setFavoritos] = useState(() => {
    const salvos = localStorage.getItem("@quintoimoveis:favoritos");
    return salvos ? JSON.parse(salvos) : []; 
  }); 

  // Procura o imóvel no mock
  const imovel = imoveisMock.find((item) => item.id === Number(id));

  // Fallback caso o ID não exista 
  if (!imovel) {
    return (
      <div className="Detalhes-Nao-Encontrados">
        <h1>Ops: Imóvel não encontrado!</h1>
        <Link className="acao-Btn" to="/">Voltar para a Home</Link>
      </div>
    );
  }

  // 2. Checa se o imóvel atual já está nos favoritos
  const favoritar = favoritos.includes(imovel.id);

  // 3. Função para Alternar (Adicionar / Remover)
  function salvarAosFavoritos() {
    let novalista; 

    if (favoritar) {
      novalista = favoritos.filter((favId) => favId !== imovel.id);
    } else {
      novalista = [...favoritos, imovel.id];
    }

    // Atualiza o ESTADO no React (faz a tela reagir na hora)
    setFavoritos(novalista);

    // Salva no LocalStorage (persiste os dados para o F5)
    localStorage.setItem("@quintoimoveis:favoritos", JSON.stringify(novalista));
  }

  return (
    <div className="container-detalhes">
      <div className="resumo">
        <h1 className="tituloResumo">Resumo</h1>
      </div>

      <button className="voltar" onClick={() => navigate(-1)}> ← Voltar</button>
        
      <div className="conteudo-detalhes">
        <img src={imovel.img} alt={imovel.titulo} className="capa-detalhes" />
          
        <div className="info-detalhes">
          <h1 className="titulo">{imovel.titulo}</h1>
          <hr className="hr" />
          <p className="bairro">Bairro: {imovel.bairro}</p>
          
          <div className="bloco-comodos">
            <p>Área: {imovel.area} (m²)</p>
            <p>Quartos: {imovel.quartos}</p>
          </div>
          
          <div className="areaPets"> 
            <p>Pets: {imovel.pets ? "Permitido" : "Não permitido"}</p>
          </div>
          
          <div className="descricao">
            <p>{imovel.descricao}</p>
          </div>
          
          <div className="bloco-precos">
            <p>Preço Aluguel: R$ {imovel.precoAluguel}</p>
            <p>Preço Condomínio: R$ {imovel.condominio}</p>
            <p className="total">
              Total: R$ {Number(imovel.precoAluguel) + Number(imovel.condominio)}
            </p>

            {/* O texto do botão responde direto à constante 'favoritar' */}
            <button className="btn-favoritar" onClick={salvarAosFavoritos}>
              {favoritar ? "Excluir" : "Favoritar"}
            </button>
          </div>        
        </div>
      </div>
    </div>
  );
}

export default Detalhes;