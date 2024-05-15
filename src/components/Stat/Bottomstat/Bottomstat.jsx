/*eslint no-unused-vars: "error"*/
/* exported global_var */
import s from './Bottomstat.module.css';

import clock from '../../../assets/img/clock.svg';
import clock2 from '../../../assets/img/clock2.svg';

import rings from '../../../assets/img/rings.svg';
import rings2 from '../../../assets/img/rings2.svg';

import stop from '../../../assets/img/stop.svg';
import stop2 from '../../../assets/img/stop2.svg';

import { useSelector } from 'react-redux';
import { selectArrForDay, selectValueForDayFocus, selectValueForDayPause, selectValueForDayStop } from '../../../redux/selectors/selectors';


export const Bottomstat = () => {

   let arrForDay = useSelector(selectArrForDay);
  console.log(arrForDay); 


  // Фокус

  let focus = useSelector(selectValueForDayFocus);
  console.log(focus); 

  if(!focus){
    focus=0;
  }  



  // Время на паузе counterForPause
  // Данные из стора для времени на паузе

  let pauseTime = useSelector(selectValueForDayPause);
  console.log(pauseTime); 

 


  // Остановки шт. (создать в объекте поле для количества остановок для одного объекта)

  let countStop = useSelector(selectValueForDayStop);
  console.log(countStop); 


  //Цвет для фона, когда есть данные 

  let colorActiveFocus;
  let colorActiveTime;
  let colorActiveStop;


  let pauseImg=clock;
  let focusImg=rings;
  let stopImg=stop;


  if(pauseTime!==0){
    colorActiveFocus={
      backgroundColor: '#ffdda9'
    }

    colorActiveTime={
      backgroundColor: '#dfdcfe'
    }

    colorActiveStop={
      backgroundColor: '#c5f1ff'
    }

    pauseImg=clock2;

    focusImg=rings2;

    stopImg=stop2 

  }


  return (
    <div className={s.bottomstat}>
      <div className={s.bottomcard} style={colorActiveFocus}>
        <p>Фокус</p>
        <span>{focus}%</span>
        <img
          className={s.logoimg}
          src={focusImg}
          alt="rings"
        />
      </div>
      <div className={s.bottomcard} style={colorActiveTime}>
        <p>Время на паузе</p>
        <span >{pauseTime}c</span>
        <img
          className={s.logoimg}
          src={pauseImg}
          alt="clock"
        />
      </div>
      <div className={s.bottomcard} style={colorActiveStop}>
        <p>Остановки</p>
        <span>{countStop}</span>
        <img
          className={s.logoimg}
          src={stopImg}
          alt="stop"
        />
      </div>
    </div>
  );
}


