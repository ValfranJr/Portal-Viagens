import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.header__title}>Portal de Viagens</h2>
      <nav className={styles.header__nav}>
        <Link href="/">Home</Link>
        <Link href="/destinos/em-alta">Destinos em Alta</Link>
        <Link href="/destinos/populares">Destinos Populares</Link>
        <Link href="/destinos/top-viagens">Destinos Top Viagens</Link>
      </nav>
    </header>
  );
};

export default Header;