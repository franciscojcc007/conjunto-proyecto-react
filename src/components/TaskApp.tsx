import React, { useState } from "react";
import { Form } from "./form/form.js";
import { List } from "./list/List.js";
import { Presentation } from './presentations/Presentation.js'
import { Contador } from  "./contador/Contador.js"


export const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const handleAddTask = () => {
    if (currentTask.trim() === "") return;
    setTasks([...tasks, currentTask]);
    setCurrentTask("");
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <Presentation />
      <Form value={currentTask} onChange={setCurrentTask} onAddTask={handleAddTask} />
      <List tasks={tasks} onDeleteTask={handleDeleteTask} />
      <Contador value={1}/>
    </>
  );
};


