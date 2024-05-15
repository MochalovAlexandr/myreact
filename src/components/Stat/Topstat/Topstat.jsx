/*eslint no-unused-vars: "error"*/
/* exported global_var */
import { useDispatch, useSelector } from 'react-redux';
import s from './Topstat.module.css';
import { set1WeekAgoAC, set2WeeksAgoAC, setArrTasksForDayAC, setDayBackRedAC, setThisWeekAgoAC } from '../../../redux/AC/actionCrieters';
import { selectArrCurrentWeek, selectArrLast2Week, selectArrLastWeek } from '../../../redux/selectors/selectors';



export const Topstat = () => {
  let dispatch = useDispatch();

  let currentWeek = useSelector(selectArrCurrentWeek);

  let lastWeek = useSelector(selectArrLastWeek);

  let last2Week = useSelector(selectArrLast2Week);


  let handleChange = (e)=>{ 
  
    let selectValue = e.target.value;
  
    if(selectValue==='Эта неделя'){
      dispatch(setThisWeekAgoAC());
      dispatch(setDayBackRedAC(0));
      dispatch(setArrTasksForDayAC(currentWeek[0]));
    }
  
    if(selectValue==='Прошлая неделя'){
      dispatch(set1WeekAgoAC());
      dispatch(setDayBackRedAC(0));
      dispatch(setArrTasksForDayAC(lastWeek[0]));
      }
  
    if(selectValue==='2 недели назад'){
      dispatch(set2WeeksAgoAC());
      dispatch(setDayBackRedAC(0));
      dispatch(setArrTasksForDayAC(last2Week[0]));
    }  
  }
  return (
    <div className={s.topstat}>
      <p className={s.topstattitle}>Ваша активность</p>  
      <select className={s.topstatsort} onChange={(e)=>{handleChange(e)}}>
        <option className={s.stitem}>Эта неделя</option>
        <option className={s.stitem}>Прошлая неделя</option>
        <option className={s.stitem}>2 недели назад</option>
      </select>
    </div>
  );
}


