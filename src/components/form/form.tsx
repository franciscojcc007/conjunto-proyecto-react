import './form.css'
import '../button/button.css'
import { Button } from '../button/Button';

interface formProps{
  value: string;
  onChange: (value: string) => void;
  onAddTask: () => void;
}

export const Form = ({ value, onChange, onAddTask }: formProps) => {
  return (
    <section>
      <h2>Gestor de Tareas</h2>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Escribe una tarea..."
        />
        <Button label="Agregar" parentMethod={onAddTask} />
      </div>
    </section>
  );
};

