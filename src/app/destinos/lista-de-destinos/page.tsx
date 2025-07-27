import Grid from "@/app/componentes/Grid";
import Title from "@/app/componentes/Title";
import { destinos } from "@/lib/destinos";

const DestinosEmAlta = () => {
  return (
    <>
        <Title title="Lista de Destinos"/>
        <Grid destinos={destinos}/>
    </>
  );
};

export default DestinosEmAlta;