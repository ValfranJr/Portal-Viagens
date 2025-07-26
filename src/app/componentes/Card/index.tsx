import { Destino } from "@/app/typess/types";
import styles from "./Card.module.css";

type Props = {
  destinos: Destino;
};

const Card = ({destinos}: Props) => {
  const {id, nome, imagem, descricao} = destinos;
  return (
    <div key={id} className={styles.card}>
      <img className={styles.card__image} src={imagem} alt={`Imagem do destino ${nome}`} />
      <h3 className={styles.card__title}>{nome}</h3>
      <p className={styles.card__description}>{descricao}</p>
    </div>
  );
};

export default Card;