import { Destino } from "@/app/typess/types";

const Card = ({destinos}: Readonly<{destinos: Destino[]}>) => {
  return (
    <>
      {destinos.map((destino) => (
        <div className="card">
          <img src={destino.imagem} alt={destino.nome} />
          <h3>{destino.nome}</h3>
          <p>{destino.descricao}</p>
        </div>
      ))}
    </>
  );
};

export default Card;