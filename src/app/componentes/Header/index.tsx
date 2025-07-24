import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h2>Portal de Viagens</h2>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/destinos/em-alta">Destinos em Alta</Link>
        <Link href="/destinos/populares">Destinos Populares</Link>
        <Link href="/destinos/top-viagens">Destinos Top Viagens</Link>
      </nav>
    </header>
  );
};

export default Header;