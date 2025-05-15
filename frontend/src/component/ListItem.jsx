// import { useState } from "react";
import Checkbox from "./Checkbox";

function ListItem({index, item}){

  // const [isChecked, setIsChecked] = useState(false);

  // const handleChange = () => {
  //   setIsChecked(!isChecked);
  // };
  console.log(item['_id'])
  
  return(
    <div className="card mb-3">
      <div className="row">
            <div className="col-2">
              <div className="card">{index+1}</div>
            </div>
            <div className="col-3">
              <div className="card">{item['title']}</div>
            </div>
            <div className="col-5">
              <div className="card">{item['details']}</div>
            </div>
            <div className="col">
              <Checkbox id={item['_id']}/>
              
                
            </div>
      </div> 
    </div>
  )
}

export default ListItem