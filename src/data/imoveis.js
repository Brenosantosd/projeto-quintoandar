import apeBotafogo from '../assets/apeBotafogo.jpg';
import apeCopacabana from '../assets/apeCopacabana.jpg';
import apeFlamengo from '../assets/apeFlamengo.jpg';
import apeTijuca from '../assets/apeTijuca.jpg';

const imoveisMock = [
  {
    id: 1,
    titulo: "Apê aconchegante em Botafogo",
    bairro: "Botafogo",
    precoAluguel: 2800,
    condominio: 650,
    quartos: 2,
    banheiros: 1,
    area: 65,
    pets: true,
    img: apeBotafogo,
    descricao: "Excelente apartamento reformado, próximo ao metrô, farto comércio e vista para as montanhas."
  },
  {
    id: 2,
    titulo: "Studio moderno em Copacabana",
    bairro: "Copacabana",
    precoAluguel: 1900,
    condominio: 420,
    quartos: 1,
    banheiros: 1,
    area: 38,
    pets: false,
    img: apeCopacabana,
    descricao: "Studio mobiliado a duas quadras da praia. Perfeito para quem busca praticidade."
  },
  {
    id: 3,
    titulo: "Apartamento amplo no Flamengo",
    bairro: "Flamengo",
    precoAluguel: 3500,
    condominio: 800,
    quartos: 3,
    banheiros: 2,
    area: 95,
    pets: true,
    img: apeFlamengo,
    descricao: "Amplo apartamento com varanda, suíte e vaga de garagem ao lado do Aterro do Flamengo."
  },
  {
    id: 4,
    titulo: "Loft industrial em Tijuca",
    bairro: "Tijuca",
    precoAluguel: 2100,
    condominio: 380,
    quartos: 1,
    banheiros: 1,
    area: 45,
    pets: true,
    img: apeTijuca,
    descricao: "Loft estilo industrial recém-entregue, próximo ao metrô Saens Peña."
  }
];

export default imoveisMock; 