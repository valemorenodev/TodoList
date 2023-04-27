import { useState } from 'react';
import style from './Container.css'
import FormTodo from '../../components/FormTodo/FormTodo';
import TaskList from '../../components/TaskList/TaskList';

const Container = () => {
  const [list, setList] = useState([]);

  const handleAddItem = addItem => {
    setList([...list, addItem]);
  };
  return (
    <div className={style.Container}>
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />
    </div>
  );
}

export default Container;
