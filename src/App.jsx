import Createlist from "./components/Createlist";
import FoodHeading from "./components/foodHeading";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import FoodInput from "./components/FoodInput";



function App() {
  const headingname = "Healthy Food list";
  const foodname =["Vegetable","Pulse","Rice","Paneer","Milk","Fruits","Ghee"];

  return (
      <div>
      <Navbar></Navbar>
      <Container>
        <FoodHeading headingname={headingname}></FoodHeading>
        <FoodInput></FoodInput>
        <Createlist foodname={foodname}></Createlist> 
      </Container>
     </div>
  );
}



export default App;