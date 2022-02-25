import Card from "../Card/Card"
import styles from "./Home.module.css";


export default function Home() {
  return (
    <div className={styles.home_container}>
      <h1 className={styles.home_welcomeTitle}>¡Bienvenidx a KeDatazo!</h1>
      <h2 className={styles.home_secondaryTitle}>Aca vas a encontrar miles de datos random muy loquitos que te van a gustar mucho bb! que disfrutes muchito xoxo</h2>
      <Card/>
    </div>
  );
}
