import React, {useState} from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import {TiEdit} from 'react-icons/ti'
import{IoIosCheckmarkCircleOutline} from 'react-icons/io'
import { useEffect } from "react";

const Task = ({ task, onDelete, remindMe, onComplete }) => {
  const [edit,setEdit]=useState({
    id:null,
    value:''
  })
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => remindMe(task.id)}
    >
      <h5>
        {task.text}{" "}
        <AiTwotoneDelete
          style={{ cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
        <TiEdit style={{ cursor: "pointer" }} onClick={()=>setEdit({id:task.id, value:[task.text,task.day,task.reminder]})}/>
        <IoIosCheckmarkCircleOutline style={{ cursor: "pointer" }} onClick={()=>onComplete(task.id)}/>
      </h5>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
