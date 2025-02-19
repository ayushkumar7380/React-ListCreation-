import styles from "./Listitem.module.css";

function Listitem ({food}){
  return ( 
  <li className ={`${styles["item"]} list-group-item`}>
    <span className={styles.ayspan}>{food}</span>
    <span><button className="btn btn-info" id={styles.button}>Buy</button></span>
    <span className={styles.content}>Content</span>
  </li>
  );
}
export default Listitem;