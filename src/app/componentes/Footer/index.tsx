import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}> &copy; 2025 Portal de Viagens - Todos os direitos reservados.</p>{" "}
    </footer>
  );
};

export default Footer;
