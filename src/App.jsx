import Createlist from "./components/Createlist";
import FoodHeading from "./components/foodHeading";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  const headingname = "Healthy Food list";

  let [foodItems, setFoodItems] = useState([
    "Vegetable",
    "Pulse",
    "Rice",
    "Paneer",
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }

    console.log(event);
  };

  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <FoodHeading headingname={headingname}></FoodHeading>
        <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
        <Createlist foodname={foodItems}></Createlist>
      </Container>
    </div>
  );
}

export default App;
