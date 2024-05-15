// Значение для времени всех заданий НЕ РАБОТАЕТ!!!!!! без return
export const selectAllTime = (state) => {
  return state.tasks;
}

// Значение для времени текущего задания НЕ РАБОТАЕТ!!!!!!
export const selectFirstTask= (state) => {
  return state.tasks
}

// Массив для отображения начальных задачь
// export const selectArrTasks = state => state.tasks

// Значение для времени текущего задания
export const selectCounterForTimer= (state) => {
  if(state.tasks.length===0) return;
 return state.tasks[0].counterForTimer
}

// Значение для времени на паузе
export const selectCounterForPause= (state) => {
  if(state.tasks.length===0) return;
  return state.tasks[0].counterForPause
}

// Массив для задач для статистики
export const selectArrСompletedTasks = state => state.completedTasks;

// Массив для задач для статистики
export const selectTimerPause = state => state.pauseTimer;

// Состояние для фона сверху таймера
export const selectBacgroundTop = state => state.bacgroundTop;

// Состояние для выбора текущей недели в статистике
export const selectWeek = state => state.whatAweek;

// Массив для выбранного дня в статистике 
export const selectArrForDay = state => state.arrTasksForDay;

// Массив для выбранного дня в статистике 
export const selectArrForRedBackDay = state => state.arrDayBackRed;

// Массив для выбора текущей недели
export const selectArrCurrentWeek = state => state.currentWeek;

// Массив для выбора прошлой недели
export const selectArrLastWeek = state => state.lastWeek;

// Массив для выбора позапрошлой недели
export const selectArrLast2Week = state => state.last2Week;

// Число для выбора Время на паузе counterForPause

export const selectValueForDayPause= (state) => {
  let arrTaskDay = state.arrTasksForDay;
  
 return arrTaskDay.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.counterForPause;
}, 0);
}

// Число для фокуса за выбранный день

export const selectValueForDayFocus= (state) => {
 let arrTaskDay = state.arrTasksForDay;


 // Время на паузе
 let pause = arrTaskDay.reduce(function (accumulator, currentValue) {
   return accumulator + currentValue.counterForPause;
 }, 0);


 // Время всех заданий за день без времени на паузу

 let timeTasks=arrTaskDay.reduce(function (accumulator, currentValue) {
   return accumulator + currentValue.timeSinceStart;
 }, 0);

 let focus = Math.round(( timeTasks / (timeTasks + pause) ) * 100); 
 
 return focus
}


// Число для выбора Время на паузе counterForPause

export const selectValueForDayStop = (state) => {
  let arrTaskDay = state.arrTasksForDay;

  let countStop = 0;

  for(let i of arrTaskDay){
    if(i.counterForPause){
      countStop = countStop + 1;
    }
  }

  return countStop
}


// Число в минутах для статистики, блок слева

export const selectValueForDayTime= (state) => {
  let arrTaskDay = state.arrTasksForDay;
  
 let timeForDay = arrTaskDay.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.timeSinceStart;
}, 0);
   return Math.ceil(timeForDay/60);
 
}


// Состояние для выбора текущей недели в статистике
export const selectIsEdit = state => state.isEdit;

// Количество помидоров для Timertop
export const selectPomodoroCount= state => state.tasks[0].pomodoroCount;

// Количество помидоров для Timertop
export const selectTaskCurrentId= state => state.tasks[0].id;



 