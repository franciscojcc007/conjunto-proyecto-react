import { useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [currentTask, setCurrentTask] = useState<string>("");

  const handleAddTask = () => {
    if (currentTask.trim() === "") return;
    setTasks([...tasks, currentTask]);
    setCurrentTask("");
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return {
    tasks,
    currentTask,
    setCurrentTask,
    handleAddTask,
    handleDeleteTask
  };
};
