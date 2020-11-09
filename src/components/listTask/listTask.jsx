import React from "react";
import Task from "../task/task";
import { useSelector } from "react-redux";

function ListTask() {
  let tasks = useSelector((state) => state);
  return (
    <div className="my-3">
      {tasks.map((el) => {
        return <Task key={el.id} task={el} />;
      })}
    </div>
  );
}

export default ListTask;
