import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTodoItem } from "../services/todo";
import { toast } from "react-toastify";
import ListItem from "../component/listItem";
import Navbar from "../component/Navbar";

function Todo() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

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
    
    if(!sessionStorage.getItem('username')){
      toast.error('Please login to your account!')
      navigate('/login')
      return;
    }
    
    onLoadItem();
    return () => {
      console.log("component is unmounted...");
    };
  }, [navigate]);

  const onAdd = () => {
    navigate("/addTodo");
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        {items.length === 0 ? (
          <div
            className="container-flex "
            style={{
              width: "100%",
              height: "80vh",
              display: "flex",
              justifyContent: 'center',
              "align-items": "center",
            }}
          >
            <div className="container-flex row " style={{justifyContent:'center'}}>
              <h1>No items found!</h1>
              <br />
              <button onClick={onAdd} style={{width:'200px'}}>Add first task</button>
            </div>
          </div>
        ) : (
          items.map((item, i) => <ListItem key={i} index={i} item={item} />)
        )}
      </div>
    </div>
  );
}

export default Todo;
