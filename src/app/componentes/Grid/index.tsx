import { Destino } from "@/app/typess/types";
import Card from "../Card";


type Props = {
  destinos: Destino[];
};

const Grid = ({destinos}: Props) => {
  return (
    <div>
      {destinos.map((destino) => (
        <Card destinos={destino} key={destino.id} />
      ))}
    </div>
  );
};

export default Grid;