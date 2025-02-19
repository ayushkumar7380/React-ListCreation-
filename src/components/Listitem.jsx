import styles from "./Listitem.module.css";

function Listitem ({food}){
  return ( 
  <li className ={`${styles["item"]} list-group-item`}>
    <span className={styles.ayspan}>{food}</span>
    <span><button className="btn btn-info" id={styles.button}>Buy</button></span>
  </li>
  );
}
export default Listitem;