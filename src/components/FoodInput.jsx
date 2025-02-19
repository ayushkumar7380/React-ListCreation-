import styles from "./FoodInput.module.css";

const FoodInput = () =>{
  const handleOnChange = (event) => {
    console.log(event.target.value);
  }


  return <input type="text" className={styles.foodInput} placeholder="Enter food item here"
  onChange={handleOnChange}
  
  ></input>
}

export default FoodInput;
