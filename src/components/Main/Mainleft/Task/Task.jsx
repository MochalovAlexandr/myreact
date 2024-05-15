/*eslint no-unused-vars: "error"*/
/* exported global_var */
import s from './Task.module.css';
import { TaskForm } from './TaskForm/TaskForm';
import { Tasklist } from './Tasklist/Tasklist';


// eslint-disable-next-line react/prop-types
export const Task = () => {
  return (
    <div className={s.task}>
      <TaskForm/>  
      <Tasklist/>   
    </div>
  );
}


