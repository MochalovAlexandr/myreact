import { useState } from 'react';
import { pomodorDownAC, pomodorUpAC, setIsEditChangeAC, setNewTaskNameAC } from '../../../../../../../../redux/AC/actionCrieters';
import { selectTaskCurrentId } from '../../../../../../../../redux/selectors/selectors';
import s from './Droplist.module.css';
import { DeleteIcon } from './Icons/DeleteIcon';
import { EditIcon } from './Icons/EditIcon';
import { MinusIcon } from './Icons/MinusIcon';
import { PlusIcon } from './Icons/PlusIcon';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Deletemodal } from './Deletemodal/Deletemodal';






// eslint-disable-next-line react/prop-types
export function Droplist({ itemId }) {
 
  let dispatch = useDispatch();
  
  function handleChange (){
    console.log(itemId);
    dispatch(setNewTaskNameAC(itemId));
    dispatch(setIsEditChangeAC());
  }

  let taskCurrentId = useSelector(selectTaskCurrentId);

  function handlePomodoroCountUp (){
    if(taskCurrentId !== itemId) return;
    
    dispatch(pomodorUpAC());
  }

  function handlePomodoroCountDown (){
    if(taskCurrentId !== itemId) return;    
    dispatch(pomodorDownAC());
  }



  const [isModalOpened, setIsModalOpened] = useState(false);


  return (
    <ul className={s.buttonwrapper}>      
      <li className={s.buttonmenu} onClick={handlePomodoroCountUp}>
      <PlusIcon/>
        <p className={s.buttonmenutext}>Увеличить</p>
      </li>
      <li className={s.buttonmenu} onClick={handlePomodoroCountDown}>
        <MinusIcon/>
        <p className={s.buttonmenutext}>Уменьшить</p>
      </li> 
      <li className={s.buttonmenu} onClick={handleChange}>
        <EditIcon/>
        <p className={s.buttonmenutext}>Редактировать</p>
      </li> 
      <li className={s.buttonmenu}
      onClick={() => { setIsModalOpened(true) }}>
        <DeleteIcon/>
        <p className={s.buttonmenutext}>Удалить</p>

        {isModalOpened && (
          <Deletemodal itemId={itemId}
            onClose={() => { setIsModalOpened(false) }}
          />
        )}

      </li> 
    </ul>
  );
}
