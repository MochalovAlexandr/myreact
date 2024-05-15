import { selectArrTasks } from '../../../../redux/store';
import s from './AllTime.module.css';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
export const AllTime = () => {

  let allTime = useSelector(selectArrTasks).map((el)=> el.timeSinceStart).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );  

    let time;
  if(Math.floor(allTime/60/60).toString().slice(-1) === '0') {
    time='часов'
  }    
  if(Math.floor(allTime/60/60).toString().slice(-1) === '1') {
    time='час'
  }  
  if(Math.floor(allTime/60/60).toString().slice(-1) === '2') {
    time='часа'
  }
  if(Math.floor(allTime/60/60).toString().slice(-1) === '3') {
    time='часа'
  }
  if(Math.floor(allTime/60/60).toString().slice(-1) === '4') {
    time='часа'
  }

  
  return (
    <div className={s.alltime}>
     
     <p className={s.alltimetext}>{allTime>59 ? Math.floor(allTime/60/60) + ` ${time} ` + (allTime/60)%60+ ' мин' : `${allTime}` +  ' мин'}</p>
     <p className={s.alltimetext}>{}</p>

    </div>
  );
}

