// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTodoItem } from "../services/todo";
import { toast } from "react-toastify";
import ListItem from "../component/listItem";
import Navbar from "../component/Navbar";

function Todo() {
  const [items, setItems] = useState([]);
  // const navigate = useNavigate();

  const onLoadItem = async () => {
    const result = await getTodoItem(sessionStorage.getItem("username"));
    if (result.status == 200) {
      setItems(result.data);
    } else {
      toast.error("No items found!");
    }
  };

  useEffect(() => {
    console.log("component is mounted....");
    onLoadItem();
    return () => {
      console.log("component is unmounted...");
    };
  }, []);

  

  return (
    <div >
      <Navbar/>
      
      <div className="container">
        {items.length === 0 ? (
          <h1>No items found.</h1>
        ) : (
          items.map((item, i) => <ListItem key={i} index={i} item={item} />)
        )}
      </div>

      
    </div>
  );
}

export default Todo;
