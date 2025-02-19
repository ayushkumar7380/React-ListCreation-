import styles from "./Listitem.module.css";

function Listitem ({food}){
  const handleBuyButtonClicked = () => {
    console.log(event);
    console.log(`${food} being bought`)
  }
  

  return ( 
  <li className ={`${styles["item"]} list-group-item`}>
    <span className={styles.ayspan}>{food}</span>
    <span>
      <button className="btn btn-info" id={styles.button}
      onClick={(event) => handleBuyButtonClicked (event)}
      >Buy</button>
    </span>
  </li>
  );
}
export default Listitem;