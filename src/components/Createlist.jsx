import styles from "./Createlist.module.css"
import Listitem from "./Listitem";


function Createlist  ({foodname}) {
  return (<>
    <ul className="list-group">
      {foodname.map((item) => (
        <Listitem key={item} food={item}/> 
        ))}
    </ul>
  </>
  );
};



export default Createlist;