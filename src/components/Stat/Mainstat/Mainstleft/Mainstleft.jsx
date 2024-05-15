/*eslint no-unused-vars: "error"*/
/* exported global_var */
import s from './Mainstleft.module.css';

import tomato2 from '../../../../assets/img/tomato2.svg';
import tomato1 from '../../../../assets/img/tomato1.svg';

import { useSelector } from 'react-redux';
import { selectArrForDay, selectValueForDayTime } from '../../../../redux/selectors/selectors';



export const Mainstleft = () => {
  let arrForDay = useSelector(selectArrForDay);

  let toatoCount =arrForDay.length;

  let tomatos = (toatoCount) => {
    if(toatoCount===1){
      return 'помидор';
    } 
    else if(toatoCount === 2){
      return 'помидора';
    } 
    else if(toatoCount ===  3 ){
      return 'помидора';
    } 
    else if(toatoCount === 4){
      return 'помидора';
    } 
    else {
      return 'помидоров';
    }
  }

  let temeForDay = useSelector(selectValueForDayTime);
  console.log(temeForDay);

  let min = 'минут';

  if(temeForDay===1){
    min='минуты';
  }


  return (
    <div className={s.mainstleft}>      
      <div className={s.mainstlefttop}>
        <p className={s.mainstleftday}>{arrForDay[0]?.day ? arrForDay[0].day:'нет данных'}</p>
        <p className={s.mainstlefttime}>Вы работали над задачами в течение: <span>{temeForDay} {min}</span></p>
      </div>      
      
      { toatoCount===0 ?
      <div className={s.mainstleftbot}>
      <img
          className={s.logoimg}
          src={tomato2}
          alt="tomato2"
        />
    </div> :
    <div className={s.tomatocount}>
    <div className={s.tomatocounttop}>
      <img
          className={s.logoimg1}
          src={tomato1}
          alt="tomato1"
        />
        <span className={s.tomcount}> x {toatoCount}</span>
    </div>
    <div className={s.tomatocountbot}>
     <span className={s.tomatocountbot}>{toatoCount}{'\u00A0'}</span>
     <span>{tomatos(toatoCount)}</span>
    </div>
  </div>
    
  }
    </div>
  );
}


