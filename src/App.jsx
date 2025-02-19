import Createlist from "./components/Createlist";
import FoodHeading from "./components/foodHeading";
import Container from "./components/Container";
import Navbar from "./components/Navbar";



function App() {
  const headingname = "Healthy Food list";
  const foodname =["Vegetable","Pulse","Rice","Paneer","Milk","Fruits","Ghee"];

  return (
      <div>
      <Navbar></Navbar>
      <br></br>
      <Container>
      <FoodHeading headingname={headingname}></FoodHeading>
      <Createlist foodname={foodname}></Createlist> 
      </Container>
     </div>
  );
}



export default App;