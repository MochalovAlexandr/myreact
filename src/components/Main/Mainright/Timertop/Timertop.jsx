/* eslint-disable react/prop-types */
import { selectPomodoroCount } from '../../../../redux/selectors/selectors';
import s from './Timertop.module.css';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
export const Timertop = ({backgroundTop, firstTask}) => {

  let pomodoroCount = useSelector(selectPomodoroCount); 
  console.log(pomodoroCount)

  const divStyleRed = {
    backgroundColor: '#dc3e22'    
  };

  const divStyleGreen = {
    backgroundColor: '#a8b64f'    
  };

  let divStyle
  if(backgroundTop==='start'){
    divStyle = divStyleRed;
  } else if (backgroundTop==='pause'){
    divStyle = divStyleGreen;
  }

  return (
    <div className={s.timertop} style={divStyle ? divStyle : null}>
     <div className={s.timertask}>{firstTask?.taskItemText ? firstTask.taskItemText: 'Задач нет'}</div>
     <div className={s.tomatcount}>{divStyle === divStyleGreen ? 'ПАУЗА' : `Помидор ${pomodoroCount}`}</div>
    </div>
  );
}

