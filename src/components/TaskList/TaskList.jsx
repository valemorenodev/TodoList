// el siguiente comentario es para que sonarqube no marque ningun error ya que no esta actualizado para manejar props (los toma como variables no definidas)
/* eslint-disable react/prop-types */
import Checkbox from '../Checkbox/Checkbox';

const TaskList = (props) => {
  const { list, setList } = props;
  // Recorre el item de la tarea por id y la toma como terminada
  const onChangeStatus = e => {
    const { name, checked } = e.target;
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setList(updateList);
  };

  const onClickRemoveItem = () => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };
  const chk = list.map(item => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="todo-list">
      {list.length ? chk : "No hay tareas pendientes"}
      {list.length ? (
        <p>
          <button className="button blue" onClick={onClickRemoveItem}>
            Eliminar tareas terminadas
          </button>
        </p>
      ) : null}
    </div>
  );
}

export default TaskList;
