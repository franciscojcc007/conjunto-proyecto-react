import { useState } from "react";
import { Form } from "./form/form.js";
import { List } from "./list/List.js";
import { Presentation } from './presentations/Presentation.js'
import { Count } from  "./contador/Count.js"


export const TaskApp = () => {
    const [tasks, setTasks] = useState<string[]>([]);
  const [currentTask, setCurrentTask] = useState<string>('');

  const handleAddTask = () => {
    if (currentTask.trim() === "") return;
    setTasks([...tasks, currentTask]);
    setCurrentTask("");
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <Presentation />
      <Form value={currentTask} onChange={setCurrentTask} onAddTask={handleAddTask} />
      <List tasks={tasks} onDeleteTask={handleDeleteTask} />
      <Count/>
    </>
  );
};



