import "@/styles/globals.css";
import Grid from "./componentes/Grid";
import { destinos } from "@/lib/destinos";
import Title from "./componentes/Title";

export default function Home() {
  const destaques = destinos.slice(0, 2);
  return (
    <>
    <Title title="Destinos em Alta"/>
    <Grid destinos={destaques}/>
    </>

  );
}
