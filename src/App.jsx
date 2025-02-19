import Createlist from "./components/Createlist";
import FoodHeading from "./components/foodHeading";
import Container from "./components/Container";



function App() {
  const headingname = "Healty Food list";
  const foodname =["Vegetable","Pulse","Rice","Paneer","Milk","Fruits","Ghee"];

  return <Container>
    <FoodHeading headingname={headingname}></FoodHeading>
    <Createlist foodname={foodname}></Createlist> 
  </Container>
}



export default App;