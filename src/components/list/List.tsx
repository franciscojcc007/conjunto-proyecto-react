import './list.css'
import { Button } from '../button/Button';

export const List = ({ tasks, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <Button label="Eliminar" parentMethod={() => onDeleteTask(index)} />
        </li>
      ))}
    </ul>
  );
};


