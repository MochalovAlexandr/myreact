/*eslint no-unused-vars: "error"*/
/* exported global_var */
import { useSelector } from 'react-redux';
import { useArrLastWeeks } from '../../../../../utilities/arrForGraph';
import s from './Mainsttime.module.css';
import { Timeitem } from './Timeitem/Timeitem';
import { selectWeek } from '../../../../../redux/selectors/selectors';


export const Mainsttime = () => {
  // Вызов ф-ии для выбора максимального значения для ннедель
  let maxTime = useArrLastWeeks();

  // Вызов состояния для показа недели из стора
  let week = useSelector(selectWeek);

  // Для отображения линий времени по оси у, максимальное значение на выбранной неделе
  let maxCurrentTime; 
  if(week==='thisweek'){
    maxCurrentTime=maxTime[3];
  } else if (week==='lastweek'){
    maxCurrentTime=maxTime[4];
  } else if (week==='2weeksago'){
    maxCurrentTime=maxTime[5];
  }




// Максимальное время для текущей недели, секунды.
// let maxCurrentTime = useArrLastWeeks()[5];

// Количество целых значений для горизонтальных линий времени Timeitem
let countForTimeitem = Math.floor(maxCurrentTime/20);

// Высота для блока Timeitem
let heightForTimeitem = (400/(maxCurrentTime/20));

let timeItem=[];

let time = 25;

for(let i = countForTimeitem; i>0; i--){  

  timeItem.push(<Timeitem key={i} height={heightForTimeitem} time={time}/>);
  time+=25;
}


  return (
    <div className={s.mainsttime}>
      {timeItem}      
    </div>
  );
}


