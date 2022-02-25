import RandomButton from "../RandomButtom/RandomButton";
import styles from "./Card.module.css";
import datos from "../../data.json";

export default function Card(props) {

  const {funFactIndex, setNewFact} = props;

  return (
    <div className={styles.card_cardContainer}>
      <div className={styles.card_contentContainer}>
          <h4 className={styles.card_contentTitle}>{datos[funFactIndex].title}</h4>
          <img src={datos[funFactIndex].img} alt={datos[funFactIndex].title} className={styles.card_Img}/>
          <p dangerouslySetInnerHTML={{ __html: datos[funFactIndex].content }} className={styles.card_contentText}></p>
          <RandomButton setNewFact={setNewFact}/>
      </div>
    </div>
  );
}
