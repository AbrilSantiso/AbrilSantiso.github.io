import Card from "../Card/Card"
import RandomButton from "../RandomButtom/RandomButton";
import { useState } from "react";
import styles from "./Home.module.css";


export default function Home() {
  const [funFactIndex, setFunFactIndex] = useState(0);

  function setNewFact(fact){
    setFunFactIndex(fact)
  }

  return (
    <div className={styles.home_container}>
      <h1 className={styles.home_welcomeTitle}>¡Bienvenidx a KeDatazo!</h1>
      <h2 className={styles.home_secondaryTitle}>Aca vas a encontrar miles de datos random muy loquitos que te van a gustar mucho bb! que disfrutes muchito xoxo</h2>
      <RandomButton setNewFact={setNewFact}/>
      <Card funFactIndex={funFactIndex} setNewFact={setNewFact}/>
    </div>
  );
}
