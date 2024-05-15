import { useSelector } from 'react-redux';
import { selectArrСompletedTasks } from '../redux/selectors/selectors';




// Функции для нахождения номера текущей недели и года (2024)

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



  // Ф-я для получения массива с данными Прошлой недели
  export let useArrLastWeeks = () => {


    // Получаем массив из стора с выполненными задачами
    let statArr = useSelector(selectArrСompletedTasks);

    // Добавим в объект задания поле с днём недели через ф-ю
    function getWeekDay(date) {
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
      
        return days[date.getDay()];
    }
    
    // Создадим массивы для 21го дня недели

    let arr0 = [];
    let arr1DayAgo = [];
    let arr2DayAgo = [];
    let arr3DayAgo = [];
    let arr4DayAgo = [];
    let arr5DayAgo = [];
    let arr6DayAgo = [];
    let arr7DayAgo = [];


    let arr8DayAgo = [];
    let arr9DayAgo = [];
    let arr10DayAgo = [];
    let arr11DayAgo = [];
    let arr12DayAgo = [];
    let arr13DayAgo = [];
    let arr14DayAgo = [];

    let arr15DayAgo = [];
    let arr16DayAgo = [];
    let arr17DayAgo = [];
    let arr18DayAgo = [];
    let arr19DayAgo = [];
    let arr20DayAgo = [];
    let arr21DayAgo = [];



    // Пройдёмся циклом по выполненным задачам для выборки по каждому массиву
    for(let item of statArr){        
        let dateTask =new Date(item.date);

         // Из сегоднешнего дня вычетается 21 днеь.  
         // сегодня 
        if(new Date (new Date().setDate(new Date().getDate() - 0)).toDateString() === dateTask.toDateString()) {             
          let obj = {...item, day: getWeekDay(dateTask)};
          arr0.push(obj);
        }
    
        // 1 день назад
        if(new Date (new Date().setDate(new Date().getDate() - 1)).toDateString() === dateTask.toDateString()) {          
          let obj = {...item, day: getWeekDay(dateTask)};
          arr1DayAgo.push(obj);
        }
    
        // 2 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 2)).toDateString() === dateTask.toDateString()) {       
          let obj = {...item, day: getWeekDay(dateTask)};
          arr2DayAgo.push(obj);
        }
    
        // 3 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 3)).toDateString() === dateTask.toDateString()) {         
          let obj = {...item, day: getWeekDay(dateTask)};
          arr3DayAgo.push(obj);
        }
        
        // 4 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 4)).toDateString() === dateTask.toDateString()) {          
            let obj = {...item, day: getWeekDay(dateTask)};
            arr4DayAgo.push(obj);
        }

        // 5 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 5)).toDateString() === dateTask.toDateString()) {           
            let obj = {...item, day: getWeekDay(dateTask)};
            arr5DayAgo.push(obj);
        }

        // 6 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 6)).toDateString() === dateTask.toDateString()) {           
            let obj = {...item, day: getWeekDay(dateTask)};
            arr6DayAgo.push(obj);
        }

        // 7 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 7)).toDateString() === dateTask.toDateString()) {          
            let obj = {...item, day: getWeekDay(dateTask)};
            arr7DayAgo.push(obj);
        }

        // 8 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 8)).toDateString() === dateTask.toDateString()) {           
            let obj = {...item, day: getWeekDay(dateTask)};
            arr8DayAgo.push(obj);
        }

        // 9 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 9)).toDateString() === dateTask.toDateString()) {           
            let obj = {...item, day: getWeekDay(dateTask)};
            arr9DayAgo.push(obj);
        }

        // 10 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 10)).toDateString() === dateTask.toDateString()) {        
            let obj = {...item, day: getWeekDay(dateTask)};
            arr10DayAgo.push(obj);
        }

        // 11 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 11)).toDateString() === dateTask.toDateString()) {           
            let obj = {...item, day: getWeekDay(dateTask)};
            arr11DayAgo.push(obj);
        }

        // 12 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 12)).toDateString() === dateTask.toDateString()) {        
            let obj = {...item, day: getWeekDay(dateTask)};
            arr12DayAgo.push(obj);
        }

        // 13 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 13)).toDateString() === dateTask.toDateString()) {          
            let obj = {...item, day: getWeekDay(dateTask)};
            arr13DayAgo.push(obj);
        }

        // 14 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 14)).toDateString() === dateTask.toDateString()) {            
            let obj = {...item, day: getWeekDay(dateTask)};
            arr14DayAgo.push(obj);
        }




        // 15 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 15)).toDateString() === dateTask.toDateString()) {          
            let obj = {...item, day: getWeekDay(dateTask)};
            arr15DayAgo.push(obj);
        }

        
        // 16 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 16)).toDateString() === dateTask.toDateString()) {           
            let obj = {...item, day: getWeekDay(dateTask)};
            arr16DayAgo.push(obj);
        }
        
        // 17 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 17)).toDateString() === dateTask.toDateString()) {            
            let obj = {...item, day: getWeekDay(dateTask)};
            arr17DayAgo.push(obj);
        }
        
        // 18 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 18)).toDateString() === dateTask.toDateString()) {            
            let obj = {...item, day: getWeekDay(dateTask)};
            arr18DayAgo.push(obj);
        }
        
        // 19 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 19)).toDateString() === dateTask.toDateString()) {           
            let obj = {...item, day: getWeekDay(dateTask)};
            arr19DayAgo.push(obj);
        }
        
        // 20 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 20)).toDateString() === dateTask.toDateString()) {          
            let obj = {...item, day: getWeekDay(dateTask)};
            arr20DayAgo.push(obj);
        }
        
        // 21 дня назад
        if(new Date (new Date().setDate(new Date().getDate() - 21)).toDateString() === dateTask.toDateString()) {          
            let obj = {...item, day: getWeekDay(dateTask)};
            arr21DayAgo.push(obj);
        }

    
    }
    
    // Сделаем массив с массивами 21 день назад

    let ago14DayArr=[arr0, arr1DayAgo, arr2DayAgo, arr3DayAgo, 
        arr4DayAgo, arr5DayAgo, arr6DayAgo, arr7DayAgo, 
        arr8DayAgo, arr9DayAgo, arr10DayAgo, arr11DayAgo, 
        arr12DayAgo, arr13DayAgo, arr14DayAgo,
        arr15DayAgo, arr16DayAgo, arr17DayAgo,
        arr18DayAgo, arr19DayAgo, arr20DayAgo, arr21DayAgo
    ];

    // Сортируем по текщей неделе
    let arrPn = [], arrVt = [], arrSr = [], arrCht = [], arrPt = [], arrSb = [], arrVs = [];
    
    // Сортируем по прошлой неделе
    let arrLastPn = [], arrLastVt = [], arrLastSr = [], arrLastCht = [], arrLastPt = [], arrLastSb = [], arrLastVs = [];    

     // Сортируем по позопрошлой неделе
     let arr2WeeksAgoPn = [], arr2WeeksAgoVt = [], arr2WeeksoAgoSr = [], arr2WeeksAgoCht = [], arr2WeeksAgoPt = [], arr2WeeksAgoSb = [], arr2WeeksAgoVs = [];   

    // Проходим по массиву задачь за 14 дней назад

    ago14DayArr.forEach((item)=>{
        // Понедельник
        if(new Date(item[0]?.date).getWeek()=== new Date().getWeek() && new Date(item[0]?.date).getDay() === 1 ) {
          arrPn = item;
        }
        // Вторник
        if(new Date(item[0]?.date).getWeek()=== new Date().getWeek() && new Date(item[0]?.date).getDay() === 2 ) {
          arrVt = item;
        }
        // Среда
        if(new Date(item[0]?.date).getWeek()=== new Date().getWeek() && new Date(item[0]?.date).getDay() === 3 ) {
          arrSr = item;
        }
        // Четверг
        if(new Date(item[0]?.date).getWeek()=== new Date().getWeek() && new Date(item[0]?.date).getDay() === 4 ) {
          arrCht = item;
        }
        // Пятница
        if(new Date(item[0]?.date).getWeek()=== new Date().getWeek() && new Date(item[0]?.date).getDay() === 5 ) {
          arrPt = item;
        }
        // Суббота
        if(new Date(item[0]?.date).getWeek()=== new Date().getWeek() && new Date(item[0]?.date).getDay() === 6 ) {
          arrSb = item;
        }
        // Воскресенье
        if(new Date(item[0]?.date).getWeek()=== new Date().getWeek() && new Date(item[0]?.date).getDay() === 0 ) {
          arrVs = item;
        }

        
        // Понедельник Прошлый
        if(new Date(item[0]?.date).getWeek()=== (new Date().getWeek()-1) && new Date(item[0]?.date).getDay() === 1 ) {
            arrLastPn = item;
        }

        // Вторник Прошлый
        if(new Date(item[0]?.date).getWeek()=== (new Date().getWeek()-1) && new Date(item[0]?.date).getDay() === 2 ) {
            arrLastVt = item;
        }
        
        // Среда Прошлый
        if(new Date(item[0]?.date).getWeek()=== (new Date().getWeek()-1) && new Date(item[0]?.date).getDay() === 3 ) {
            arrLastSr = item;
        }
        
        // Четверг Прошлый
        if(new Date(item[0]?.date).getWeek()=== (new Date().getWeek()-1) && new Date(item[0]?.date).getDay() === 4 ) {
            arrLastCht = item;
        }
        
        // Пятница Прошлый
        if(new Date(item[0]?.date).getWeek()=== (new Date().getWeek()-1) && new Date(item[0]?.date).getDay() === 5 ) {
            arrLastPt = item;
        }
        
        // Суббота Прошлый
        if(new Date(item[0]?.date).getWeek()=== (new Date().getWeek()-1) && new Date(item[0]?.date).getDay() === 6 ) {
            arrLastSb = item;
        }
        
        // Воскресенье Прошлый
        if(new Date(item[0]?.date).getWeek()=== (new Date().getWeek()-1) && new Date(item[0]?.date).getDay() === 0 ) {
            arrLastVs = item;
        }
                        

        // Понедельник ПозоПрошлый
        if(new Date(item[0]?.date).getWeek()=== (new Date().getWeek()-2) && new Date(item[0]?.date).getDay() === 1 ) {
            arr2WeeksAgoPn = item;
        }

        // Вторник ПозоПрошлый
        if(new Date(item[0]?.date).getWeek()=== (new Date().getWeek()-2) && new Date(item[0]?.date).getDay() === 2 ) {
            arr2WeeksAgoVt = item;
        }
        
        // Среда ПозоПрошлый
        if(new Date(item[0]?.date).getWeek()=== (new Date().getWeek()-2) && new Date(item[0]?.date).getDay() === 3 ) {
            arr2WeeksoAgoSr = item;
        }
        
        // Четверг ПозоПрошлый
        if(new Date(item[0]?.date).getWeek()=== (new Date().getWeek()-2) && new Date(item[0]?.date).getDay() === 4 ) {
            arr2WeeksAgoCht = item;
        }
        
        // Пятница ПозоПрошлый
        if(new Date(item[0]?.date).getWeek()=== (new Date().getWeek()-2) && new Date(item[0]?.date).getDay() === 5 ) {
            arr2WeeksAgoPt = item;
        }
        
        // Суббота ПозоПрошлый
        if(new Date(item[0]?.date).getWeek()=== (new Date().getWeek()-2) && new Date(item[0]?.date).getDay() === 6 ) {
            arr2WeeksAgoSb = item;
        }
        
        // Воскресенье ПозоПрошлый
        if(new Date(item[0]?.date).getWeek()=== (new Date().getWeek()-2) && new Date(item[0]?.date).getDay() === 0 ) {
            arr2WeeksAgoVs = item;
        }


      });
    
    
    // Текущая неделя
    let currentWeek = [arrPn, arrVt, arrSr, arrCht, arrPt, arrSb, arrVs];
    let lastWeek =  [arrLastPn, arrLastVt, arrLastSr, arrLastCht, arrLastPt, arrLastSb, arrLastVs ];    
    let last2Week =  [arr2WeeksAgoPn, arr2WeeksAgoVt, arr2WeeksoAgoSr, arr2WeeksAgoCht, arr2WeeksAgoPt, arr2WeeksAgoSb, arr2WeeksAgoVs ];    


    // Выведем сумму затраченного времени на задачи в массив по каждой недели

    // Текущая неделя
    let sumTimeForCurrentWeek = currentWeek.map((item)=>{
    
        return item.reduce(function (accumulator, currentValue, index, array) {
          currentValue=array[index].timeSinceStart;
    
          return accumulator + currentValue;
        }, 0)
    });


    // Прошлая неделя 
    let sumTimeForLastWeek = lastWeek.map((item)=>{

    return item.reduce(function (accumulator, currentValue, index, array) {
        currentValue=array[index].timeSinceStart;

        return accumulator + currentValue;
    }, 0)
    });


    // ПозоПрошлая неделя 
    let sumTimeFor2LastWeek = last2Week.map((item)=>{

    return item.reduce(function (accumulator, currentValue, index, array) {
        currentValue=array[index].timeSinceStart;

        return accumulator + currentValue;
    }, 0)
    });

    // Текущая неделя Максимальное значение для вставки в блок высотой 400px
    let maxCurrent = sumTimeForCurrentWeek.reduce((max, num) => (max > num ? max : num)); // 18

    // Прошлая неделя Максимальное значение для вставки в блок высотой 400px
    let maxLast = sumTimeForLastWeek.reduce((max, num) => (max > num ? max : num)); // 18

    // ПозоПрошлая неделя Максимальное значение для вставки в блок высотой 400px
    let max2Last = sumTimeFor2LastWeek.reduce((max, num) => (max > num ? max : num)); // 18


    // Получаем массив значений для вставки в Graphitem Текущая неделя
    let arrForGraphCurrentWeek = sumTimeForCurrentWeek.map((item)=>(       
       (400/maxCurrent)*item
    ));

    // Получаем массив значений для вставки в Graphitem Прошлая неделя
    let arrForGraphLastWeek = sumTimeForLastWeek.map((item)=>(       
        (400/maxLast)*item
    ));

    // Получаем массив значений для вставки в Graphitem ПозоПрошлая неделя
    let arrForGraph2LastWeek = sumTimeFor2LastWeek.map((item)=>(       
    (400/max2Last)*item
    ));

    return [
        arrForGraphCurrentWeek,
        arrForGraphLastWeek,
        arrForGraph2LastWeek,
        maxCurrent,
        maxLast,
        max2Last,
        currentWeek,
        lastWeek,
        last2Week
    ]
}