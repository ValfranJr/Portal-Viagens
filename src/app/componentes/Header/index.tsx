import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.header__title}>
        Portal de Viagens
      </Link>
      <nav className={styles.header__nav}>
        <Link href="/">Home</Link>
        <Link href="/destinos/lista-de-destinos">Lista de Destinos</Link>
      </nav>
    </header>
  );
};

export default Header;
