/*eslint no-unused-vars: "error"*/
/* exported global_var */
import { useDispatch } from 'react-redux';
import s from './Graphitem.module.css';
import { setArrTasksForDayAC, setDayBackRedAC } from '../../../../../../redux/AC/actionCrieters';


// eslint-disable-next-line react/prop-types
export const Graphitem = ({id, arrTasks, height, day, color}) => {

  let dispatch = useDispatch();
  
  let red;
  let backgroundColor;
  if(color) {
    red = '#dc3e22';
    backgroundColor = '#dc3e22';
  } else {
    red = null;
    backgroundColor = null;
  }

  if(!height) {
    height = '10px';  
    backgroundColor = 'grey' 
  }
  

  let handleClick = () => {
    dispatch(setDayBackRedAC(id));
    dispatch(setArrTasksForDayAC(arrTasks));

  }
 
  return (
    <div className={s.graphitem} onClick={handleClick}>
      <div className={s.graphbar} style={{height:height, backgroundColor:backgroundColor}}></div>
      <div className={s.graphday} style={{color: red}}>{day}</div>     
    </div>
  );
}


