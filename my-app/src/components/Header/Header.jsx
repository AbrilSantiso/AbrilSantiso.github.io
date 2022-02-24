import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
    <div className={styles.header_logoContainer}>
      <Link to="/">KEDATAZO</Link>
    </div>
    <nav className={styles.header_nav}>
      <Link to="/" className={`${styles.header_navItem} ${styles.header_linkHome}`}>Datazos</Link>
      <Link to="/ke-es-esto" className={styles.header_navItem}>Ke es esto</Link>
    </nav>
    </header>
  );
}
