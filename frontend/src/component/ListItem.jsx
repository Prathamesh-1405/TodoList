import Checkbox from "./Checkbox";

function ListItem({ item }) {
  console.log(item["_id"]);

  return (
    <div
      className=" container card mb-3"
      style={{ backgroundColor: "black", maxWidth: "700px" }}
    >
      <div className="row">
        <div className="col-10">
          <div className="row" style={{ textAlign: "left" }}>
            <h2 style={{ color: "coral" }}>{item["title"]}</h2>
          </div>
          <div className="row" style={{ textAlign: "left" }}>
            <h6 style={{ color: "grey" }}>{item["details"]}</h6>
          </div>
        </div>
        <div
          className="col container"
          style={{ display:'flex', justifyContent: 'center ', alignItems: 'center', margin:'auto' }}
        >
          
          <Checkbox id={item["_id"]} />
        </div>
      </div>
    </div>
  );
}

export default ListItem;
