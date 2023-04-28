import { useState } from 'react';
import './Container.css';
// >> Importacion de componentes
import FormTodo from '../../components/FormTodo/FormTodo'; // Este es el formulario en donde esta el checkbox
import TaskList from '../../components/TaskList/TaskList'; // Esta es la lista de tareas

const Container = () => {
  const [list, setList] = useState([]);
  // Detecta cuando se añade una tarea y la almacena en {list}
  const handleAddItem = addItem => {
    setList([...list, addItem]);
  };
  return (
    <div id={'Container'}>
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />
    </div>
  );
}

export default Container;
