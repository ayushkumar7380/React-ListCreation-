import styles from "./FoodHeading.module.css";
const FoodHeading = (props) =>{
  return <>
    <h1 className={styles.header}>{props.headingname}</h1>
  </>
}

export default FoodHeading;