import { Destino } from "@/app/typess/types";
import styles from "./Card.module.css";
import Image from "next/image";

type Props = {
  destinos: Destino;
};

const Card = ({ destinos }: Props) => {
  const { id, nome, imagem, descricao } = destinos;
  return (
    <div key={id} className={styles.card}>
      <Image
        className={styles.card__image}
        src={imagem}
        alt={`Imagem do destino ${nome}`}
        width={750}
        height={400}
      />
      <h3 className={styles.card__title}>{nome}</h3>
      <p className={styles.card__description}>{descricao}</p>
    </div>
  );
};

export default Card;
