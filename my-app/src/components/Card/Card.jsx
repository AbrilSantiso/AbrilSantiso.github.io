import styles from "./Card.module.css";
import datos from "../../data.json"

export default function Home() {
  return (
    <div className={styles.card_cardContainer}>
      <div className={styles.card_contentContainer}>
          <h4 className={styles.card_contentTitle}>{datos[0].title}</h4>
          <img src={datos[10].img} alt={datos[0].title} className={styles.card_Img}/>
          <p dangerouslySetInnerHTML={{ __html: datos[10].content }} className={styles.card_contentText}></p>
      </div>
    </div>
  );
}
