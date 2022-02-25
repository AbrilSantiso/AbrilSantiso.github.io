import data from "../../data.json";
import styles from "./RandomButton.module.css";


export default function RandomButton(props) {

    const {setNewFact} = props; 

    function generateNewFact(){
      let newIndex =  Math.floor((Math.random() * (data.length)));
      setNewFact(newIndex);
    }

  return (
   <button className={styles.randomButton} onClick={generateNewFact}>
       Quiero otro!
   </button>
  );
}
