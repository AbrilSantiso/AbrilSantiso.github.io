import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
     <div  className={styles.footer_contentContainer}>
      <p>Copyright KEDATAZO - 2022 ©</p>
      <div className={styles.footer_separationLine}></div>
      <Link to="/mandanos-tu-dato" className={styles.footer_link}>Mandanos tu datazo</Link>
     </div>
    </footer>
  );
}
