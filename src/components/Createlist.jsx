import styles from "./Createlist.module.css"
import Listitem from "./Listitem";


function Createlist  ({foodname}) {
  return (<>
    <ul className="list-group">
      {foodname.map((item) => (
        <Listitem key={item} food={item} handleBuyButtonClicked={() => console.log(`${item} being bought`)} print={()=> console.log("helloworkd")}/> 
        ))}
    </ul>
  </>
  );
};



export default Createlist;