import ReactDOM from 'react-dom';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectArrTasks } from '../../../../../../../../../redux/store';
import s from './Deletemodal.module.css';
import { addNewTasksArrAC } from '../../../../../../../../../redux/AC/actionCrieters';


// eslint-disable-next-line react/prop-types
export const Deletemodal = ({itemId}) => {


  const taskItems = useSelector(selectArrTasks);
  let dispatch = useDispatch();
  function handleDelete(){
    let newArrTask = taskItems.filter(task => task.id !== itemId);
    dispatch(addNewTasksArrAC(newArrTask));
  }

  const node = document.querySelector('#modal_root');
  if (!node) return null;
 
  return ReactDOM.createPortal((
    <div className={s.deletemodal}>
      <div className={s.deletewrap}>
        <button className={s.deleteclosetop}>X</button>
        <p className={s.deletetitle}>Удалить задачу?</p>
        <button className={s.deletebtn} onClick={handleDelete}>Удалить</button>
        <button className={s.deleteclose}>Отмена</button>
      </div>    
    </div>
  ), node);
}