import { Destino } from "@/app/typess/types";

type Props = {
  destinos: Destino;
};

const Card = ({destinos}: Props) => {
  const {id, nome, imagem, descricao} = destinos;
  return (
    <div key={id}>
      <img src={imagem} alt={`Imagem do destino ${nome}`} />
      <h3>{nome}</h3>
      <p>{descricao}</p>
    </div>
  );
};

export default Card;