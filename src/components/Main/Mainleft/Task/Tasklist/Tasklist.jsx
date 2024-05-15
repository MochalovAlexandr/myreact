/*eslint no-unused-vars: "error"*/
/* exported global_var */
import { selectArrTasks } from '../../../../../redux/store';
import { Taskitem } from './Taskitem/Taskitem';
import s from './Tasklist.module.css';
import { useSelector } from 'react-redux';



export const Tasklist = () => {  
  const taskItems = useSelector(selectArrTasks);
  return (
    <ul className={s.tasklist}>
      {taskItems.map((item, id )=>(<Taskitem itemId={item.id} key={item.id} taskitemnum={id+1} taskitemtext={item.taskItemText}/>))}      
    </ul>
  );
}



