// el siguiente comentario es para que sonarqube no marque error ya que no esta actualizado para manejar props (los toma como variables no definidas)
/* eslint-disable react/prop-types */
import { useState } from 'react';

const FormTodo = (props) => {

  const { handleAddItem } = props;
  // Al crear la tarea toma el valor y lo guarda en {description}
  const [description, setDescription] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description
    });
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-list">
        <div className="file-input">
          <input
            type="text"
            className="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button
            className="button pink"
            disabled={description ? "" : "disabled"}
          >
            Añadir
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormTodo;
