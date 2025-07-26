import { Destino } from "@/app/typess/types";
import Card from "../Card";
import styles from "./Grid.module.css";

type Props = {
  destinos: Destino[];
};

const Grid = ({destinos}: Props) => {
  return (
    <section className={styles.grid}>
      {destinos.map(destino => (
        <Card destinos={destino} key={destino.id} />
      ))}
    </section>
  );
};

export default Grid;