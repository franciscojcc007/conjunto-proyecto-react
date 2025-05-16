import './list.css'
import { Button } from '../button/Button';

interface listProps{
  tasks: string[];
  onDeleteTask: (index: number) => void;
}

export const List = ({ tasks, onDeleteTask }: listProps) => {
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


