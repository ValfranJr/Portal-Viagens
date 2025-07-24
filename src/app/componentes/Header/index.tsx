import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h2>Portal de Viagens</h2>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/sobre-mim">Sobre mim</Link>
        <Link href="/contato">Contato</Link>
        <Link href="/agenda">Agenda</Link>
      </nav>
    </header>
  );
};

export default Header;