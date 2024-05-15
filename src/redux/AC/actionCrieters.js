// Экшн криэйтер для таймера обратного отсчёта
export const counterForTimerAC = () => {
  return {
    type: 'taskPage/decrementForTimer',      
  }
}

// Экшн криэйтер для таймера Времени на паузе
export const counterForPauseAC = () => {
  return {
    type: 'taskPage/incrementForPause',      
  }
}

// Экшн криэйтер для сброса таймера в начальное состояние
export const resetForTimerAC = () => {
  return {
    type: 'taskPage/resetForTimer',      
  }
}

// Экшн криэйтер Для удаления задачи из массива (списка)
export const addNewTasksArrAC = value => {
  return {
    type: 'taskPage/setNewTasksArr',
    payload: value
  }
}

// Экшн криэйтер Для удаления задачи из массива (списка)
export const addNewСompletedTaskArrAC = () => {
  return {
    type: 'taskPage/setNewСompletedTaskArr',    
  }
}

// Экшн криэйтер для таймера обратного отсчёта Паузы на 5 минут
export const counterForTimerPauseAC = () => {
  return {
    type: 'taskPage/decrementForTimerPause',      
  }
}

// Экшн криэйтер для установки таймера обратного отсчёта Паузы на 5 минут после прохода до 0 секунд.
export const setCounterForTimerPauseAC = () => {
  return {
    type: 'taskPage/setForTimerPause',      
  }
}

// Экшн криэйтер для смены цвета сверху таймера на красный при старте
export const setColorRedAC = () => {
  return {
    type: 'taskPage/setColorRed',  
  }
}

// Экшн криэйтер для смены цвета сверху таймера на зелёный при паузе
export const setColorGreenAC = () => {
  return {
    type: 'taskPage/setColorGreen',  
  }
}

// Экшн криэйтер для смены цвета сверху таймера на серый при паузе
export const setColorGreyAC = () => {
  return {
    type: 'taskPage/setColorGrey',  
  }
}

// Экшн криэйтер для выбора текущей недели в статистике
export const setThisWeekAgoAC = () => {
  return {
    type: 'taskPage/setThisWeekAgo',  
  }
}

// Экшн криэйтер для выбора 1 неделю назад в статистике
export const set1WeekAgoAC = () => {
  return {
    type: 'taskPage/set1WeekAgo',  
  }
}

// Экшн криэйтер для выбора 2 недели назад в статистике
export const set2WeeksAgoAC = () => {
  return {
    type: 'taskPage/set2WeeksAgo',  
  }
}

// Экшн криэйтер для Массив задачь по 1у выбранному дню для статистики за 1 день
export const setArrTasksForDayAC = (arr) => {
  return {
    type: 'taskPage/setArrTasksForDay',  
    payload:   arr
  }
}

// Экшн криэйтер для дня с красным фоном
export const setDayBackRedAC = (id) => {
  let arr =  [false, false, false, false, false, false, false];
  arr[id] = true;
  return {
    type: 'taskPage/setDayBackRed',  
    payload: arr 
  }
}

// Экшн криэйтер для текущей недели в сторе
export const setCurrentWeekAC = (arr) => {
  return {
    type: 'taskPage/setCurrentWeek',  
    payload: arr  
  }
}

// Экшн криэйтер для прошлой недели в сторе
export const setLastWeekAC = (arr) => {
  return {
    type: 'taskPage/setLastWeek',  
    payload: arr  
  }
}

// Экшн криэйтер для 2 недели назад в сторе
export const setLast2WeekAC = (arr) => {
  return {
    type: 'taskPage/setLast2Week',  
    payload: arr  
  }
}

// Экшн криэйтер для редактирования названия задания
export const setNewTaskNameAC = (itemId) => {
  return {
    type: 'taskPage/setNewTaskName',  
    payload: itemId  
  }
}

// Экшн криэйтер для Замены кнопки Добавить На кнопку Сохранить изменения
export const setIsEditChangeAC = () => {
  return {
    type: 'taskPage/setIsEditChange',  
  }
}

// Экшн криэйтер для Сохраненния изменённого задания в списке задач в сторе
export const addTaskToStateAfterChangeAC = (text) => {
  return {
    type: 'taskPage/setAddTaskToStateAfterChange',  
    payload: text  
  }
}

// Экшн криэйтер для Увеличения количества времени на задачу в сторе
export const timerUpAC = () => {
  return {
    type: 'taskPage/setTimerUp',  
  }
}

// Экшн криэйтер для Увеличения количества помидоров для текущего задания
export const pomodorUpAC = () => {
  return {
    type: 'taskPage/setPomodorUp',  
  }
}

// Экшн криэйтер для Уменьшения количества помидоров для текущего задания
export const pomodorDownAC = () => {
  return {
    type: 'taskPage/setPomodorDown',  
  }
}
