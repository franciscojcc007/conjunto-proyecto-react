import { Form } from "./form/form.js";
import { List } from "./list/List.js";
import { Presentation } from './presentations/Presentation.js'
import { Count } from  "./contador/Count.js"
import { useTasks } from "./UseTasks.js";
 
export const App = () => {
  const {
    tasks,
    currentTask,
    setCurrentTask,
    handleAddTask,
    handleDeleteTask
  } = useTasks();

  return (
    <>
      <Presentation />
      <Form 
        value={currentTask} 
        onChange={setCurrentTask} 
        onAddTask={handleAddTask} 
      />
      <List 
        tasks={tasks} 
        onDeleteTask={handleDeleteTask} 
      />
      <Count />
    </>
  );
};