// import { useState } from "react";

import { editTodoItem } from "../services/todo";
import { useNavigate } from "react-router-dom";

// function Checkbox({id}){
//   // const [check, setCheck]=useState('false')

//   return(
//     <div className="card" style={{ width: '100%', height: '100%' }}>
//   <div className="form-check form-check-inline" style={{ width: '100%', height: '100%', margin: 0 }}>
//     <input
//       className="form-check-input"
//       type="checkbox"
//       id="inlineCheckbox1"
//       value="option1"
//       style={{ width: '100%', height: '100%', margin: 0 }}
//     />
//   </div>
// </div>

//   )
// }


function Checkbox({ id }) {
  const navigate=useNavigate()
  
  const handleCheckboxChange = async (e) => {
  const isChecked = e.target.checked;
  console.log(`Checkbox ${id} is now: ${isChecked}`);

  try {
    const response = await editTodoItem(id);
   
    if (response.status === 200) {
      // Optionally you might want to pass isChecked too if your backend needs it
      console.log('Update successful');
      navigate(0); // or navigate(0) to reload current route
    } else {
      console.error('Failed to update todo status');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};


  return (
    <div className="card" style={{ height: '100%' }}>
      <div
        className="form-check form-check-inline"
        style={{ width: '100%', height: '100%', margin: 0 }}
      >
        <input
          className="form-check-input"
          type="checkbox"
          id={`inlineCheckbox-${id}`}
          onChange={handleCheckboxChange}
          style={{ width: '100%', height: '100%', margin: 0 }}
        />
      </div>
    </div>
  );
}


export default Checkbox