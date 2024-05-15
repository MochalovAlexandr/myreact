/*eslint no-unused-vars: "error"*/
/* exported global_var */
import { useDispatch, useSelector } from 'react-redux';
import { Graphitem } from './Graphitem/Graphitem';
import s from './Mainstgraph.module.css';
import { selectArrCurrentWeek, selectArrForRedBackDay, selectArrLast2Week, selectArrLastWeek, selectWeek } from '../../../../../redux/selectors/selectors';
import { useArrLastWeeks } from '../../../../../utilities/arrForGraph';
import { setArrTasksForDayAC } from '../../../../../redux/AC/actionCrieters';
import { useEffect } from 'react';


// Как получить номер недели из даты

// Чтобы получить номер недели ISO (1–53) объекта Date, используйте date.getWeek().

// Чтобы получить соответствующий четырехзначный год, используйте date.getWeekYear().

// This script is released to the public domain and may be used, modified and
// distributed without restrictions. Attribution not necessary but appreciated.
// Source: https://weeknumber.net/how-to/javascript

// Returns the ISO week of the date.
Date.prototype.getWeek = function() {

  var date = new Date(this.getTime());
  // date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                        - 3 + (week1.getDay() + 6) % 7) / 7);
}

// Returns the four-digit year corresponding to the ISO week of the date.
Date.prototype.getWeekYear = function() {
  var date = new Date(this.getTime());
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  return date.getFullYear();
}








export const Mainstgraph = () => {
  // Массив для каждого элемента Graphitem
  let day = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];

   
  
  // Массив для отправки в стейт по каждому дню со всеми выполн. задачами за этот день.

  let arrTasksForDay=[];

  let week = useSelector(selectWeek);

 

  // eslint-disable-next-line no-unused-vars
  let [arrForGraphCurrentWeek, arrForGraphLastWeek, arrForGraph2LastWeek, maxCurrent, maxLast, max2Last, currentWeek, lastWeek, last2Week] = useArrLastWeeks();


  let dispatch = useDispatch();


  // Запросим из стора массивы для 3х недель
  // currentWeek, lastWeek, last2Week
  let currentWeekFromStore = useSelector(selectArrCurrentWeek);
  let lastWeekFromStore = useSelector(selectArrLastWeek);
  let last2WeekFromStore = useSelector(selectArrLast2Week);
 

  // Выведем сумму затраченного времени на задачи в массив по каждой недели

  let getHeightForGraphs = (arr) =>{
  
      // Текущая неделя
      let sumTimeForCurrentWeek = arr.map((item)=>{
        // console.log(item);
    
          return item.reduce(function (accumulator, currentValue, index, array) {
            currentValue=array[index].timeSinceStart;
      
            return accumulator + currentValue;
          }, 0)
      });

      // Текущая неделя Максимальное значение для вставки в блок высотой 400px
      let maxCurrents = sumTimeForCurrentWeek.reduce((max, num) => (max > num ? max : num)); // 18

      // Получаем массив значений для вставки в Graphitem Текущая неделя
      let arrForGraphCurrentWeek = sumTimeForCurrentWeek.map((item)=>(       
        (400/maxCurrents)*item
      ));

      return arrForGraphCurrentWeek;
  }
  let arrayToDisplay=[];
 
    
    if(week==='thisweek'){
  
      arrayToDisplay = getHeightForGraphs(currentWeekFromStore)
      arrTasksForDay = currentWeekFromStore;      
    }
    else if(week==='lastweek'){
      arrayToDisplay = getHeightForGraphs(lastWeekFromStore);
      arrTasksForDay = lastWeekFromStore;
    }
    else if(week==='2weeksago'){
      arrayToDisplay = getHeightForGraphs(last2WeekFromStore);
      arrTasksForDay = last2WeekFromStore;
    }

 



    

    useEffect(()=>{
      dispatch(setArrTasksForDayAC(arrTasksForDay[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    let arrRedBackDay = useSelector(selectArrForRedBackDay);
  return (
    <div className={s.mainstgraph}>     
     <Graphitem id={0} arrTasks={arrTasksForDay[0]} height={arrayToDisplay[0]} day={day[0]} color={arrRedBackDay[0]}/>
     <Graphitem id={1} arrTasks={arrTasksForDay[1]} height={arrayToDisplay[1]} day={day[1]} color={arrRedBackDay[1]}/>
     <Graphitem id={2} arrTasks={arrTasksForDay[2]} height={arrayToDisplay[2]} day={day[2]} color={arrRedBackDay[2]}/>
     <Graphitem id={3} arrTasks={arrTasksForDay[3]} height={arrayToDisplay[3]} day={day[3]} color={arrRedBackDay[3]}/>
     <Graphitem id={4} arrTasks={arrTasksForDay[4]} height={arrayToDisplay[4]} day={day[4]} color={arrRedBackDay[4]}/>
     <Graphitem id={5} arrTasks={arrTasksForDay[5]} height={arrayToDisplay[5]} day={day[5]} color={arrRedBackDay[5]}/>
     <Graphitem id={6} arrTasks={arrTasksForDay[6]} height={arrayToDisplay[6]} day={day[6]} color={arrRedBackDay[6]}/>
    </div>
  );
}


