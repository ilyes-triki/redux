import React, { useState } from "react";
import { useSelector } from "react-redux";

import tasks from "../redux/states";

function Filter() {
  let task = useSelector((state) => state);
  const [completed, setcompleted] = useState(task.isCompleted);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h3>Task completed</h3>{" "}
      <input
        type="checkbox"
        onClick={(e) => {
          setcompleted(!completed);
        }}
      />
    </div>
  );
}

export default Filter;
