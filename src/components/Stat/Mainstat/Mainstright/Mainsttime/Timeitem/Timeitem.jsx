/*eslint no-unused-vars: "error"*/
/* exported global_var */
import s from './Timeitem.module.css';


// eslint-disable-next-line react/prop-types
export const Timeitem = ({height, time}) => {
  return (
    <div className={s.timeitem} style={{height:height}}>
      <div className={s.timeline}></div>     
      <span className={s.timecount}>{time > 59 ? Math.floor(time/60) + 'ч ' + (time)%60 + ' мин' : time + ' мин'}</span> 

    </div>
  );
}



