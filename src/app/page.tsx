import "@/styles/globals.css";
import Grid from "./componentes/Grid";
import { destinos } from "@/lib/destinos";

export default function Home() {
  return (
    <>
    <Grid destinos={destinos}/>
    </>

  );
}
