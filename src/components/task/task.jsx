import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions";
import { useState } from "react";
import { updateTask } from "../redux/actions";

function Task({ task }) {
  const dispatch = useDispatch();
  const [edit, setedit] = useState(false);
  const [name, setname] = useState(task.name);
  const [completed, setCompleted] = useState(task.isCmpleted);
  const getStyle = () => {
    if (completed) {
      return {
        textDecoration: "line-through",
        display: "flex",
        justifyContent: "center",
      };
    } else {
      return {
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
      };
    }
  };
  return (
    <div>
      <div className="row mx-2 align-items-center ">
        <div> #{task.id.length > 1 ? task.id[2] : task.id} </div>
        <div className="col" style={getStyle()}>
          {edit ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          ) : (
            <h3>{task.name}</h3>
          )}{" "}
          <input
            type="checkbox"
            onClick={() => {
              setCompleted(!completed);
            }}
          />
        </div>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            dispatch(
              updateTask({
                ...task,
                name: name,
              })
            );
            if (edit) {
              setname(task.name);
            }
            setedit(!edit);
          }}
        >
          {" "}
          {edit ? "Update" : "Edit"}{" "}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    </div>
  );
}

export default Task;
