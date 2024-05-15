/*eslint no-unused-vars: "error"*/
/* exported global_var */
import { useDispatch, useSelector } from 'react-redux';
import { selectCount } from '../../../../../redux/store';
import { addTaskToState } from '../../../../../redux/store';
import s from './TaskForm.module.css';
import { selectIsEdit } from '../../../../../redux/selectors/selectors';
import { addTaskToStateAfterChangeAC, setIsEditChangeAC } from '../../../../../redux/AC/actionCrieters';

// Экшн криэйтер Текст для инпута
const addTextToStoreAC = text => {
  return {
    type: 'taskPage/setValue',
    payload: text
  }
}


// eslint-disable-next-line react/prop-types
export const TaskForm = () => {
  let isEdit = useSelector(selectIsEdit); 

  let dispatch = useDispatch();
  const textFromStateToInput= useSelector(selectCount);  

  function handleChange(e){    
    let taskitemtext = e.target.value;    
    dispatch(addTextToStoreAC(taskitemtext));   
  }

  function handleClick(){  
    dispatch(addTaskToState(textFromStateToInput));
    console.log(addTaskToState(textFromStateToInput)) 
  }

  function handleChangeNameTask(){
    console.log(222);
    dispatch(addTaskToStateAfterChangeAC(textFromStateToInput));
    dispatch(setIsEditChangeAC());
  }

  return (
    <form className={s.taskform}>
      <label className={s.tasklabel}>
        <input className={s.taskinput} 
        onChange={handleChange}
        value={textFromStateToInput}
        type="text" name="task" placeholder='Название задачи'/>
      </label> 
      {!isEdit ? 
        <button       
        onClick={handleClick} 
        type='button' className={s.taskbutton}>Добавить</button>   :
        <button       
        onClick={handleChangeNameTask} 
        type='button' className={s.taskbutton}>Сохранить изменения</button> 
        }  
       
    </form>
  );
}


