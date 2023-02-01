import React, { useState } from "react";
import ToDoList from "./ToDoList";
const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItem=(id)=>{
    // console.log(id);
    const list=[...Items];
    list.splice(id,1);
    setItems(list)
  }


  const updateItem=(id)=>{
    console.log(id);
    const item=Items[id]
    console.log(item);
  }
  return <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> ToDo App</h1>
        <br />
        <input type="text" placeholder="Add a item"
          value={inputList}
          onChange={itemEvent} />
        <button className="add" onClick={listofItems}> + </button>
        {/* <ToDoList text={itemval} id={index}/>  */}
        <ol>
          {Items.map((itemval, index) => {
            return <li key={index}>
              <p>{itemval}</p>
              <button className="delete" onClick={()=>{deleteItem(index)}}> </button>
              <button className="update" onClick={()=>{updateItem(index)}}>update </button>
            </li>
          })}
        </ol>

      </div>


    </div>



  </>;

}
export default App;