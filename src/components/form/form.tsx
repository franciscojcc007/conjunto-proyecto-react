import './form.css'
import '../button/button.css'
import { Button } from '../button/Button';

export const Form = ({ value, onChange, onAddTask }) => {
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

