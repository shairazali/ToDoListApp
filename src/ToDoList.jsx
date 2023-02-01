import React from "react";
const ToDoList = (props) => {
    console.log(props);
    return <li>{props.text} and id is ${props.id}</li>;
};
export default ToDoList;
