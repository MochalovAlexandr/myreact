import { createSlice, configureStore, nanoid } from '@reduxjs/toolkit'


const counterSlice = createSlice({
  name: 'taskPage',
  initialState: {
    idForChangeTask: '',
    isEdit: false,
    inputNameTask: '',
    bacgroundTop: 'null',
    whatAweek: 'thisweek',
    arrTasksForDay: [],
    currentWeek: [],
    lastWeek: [],
    last2Week: [],
    arrDayBackRed: [true, false, false, false, false, false, false],
    completedTasks:         
        (localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']).completedTasks : []),
    pauseTimer: 15,
    tasks: 

      (localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']).tasks : [{
        id: 'i5-LQaSjm9iSc0KA9_aVZ',
        date: 1708868814392,
        taskItemText: 'Сверстать сайт',
        timeSinceStart: 20,  
        counterForTimer: 20,
        counterForPause: 0, 
        pomodoroCount: 1,       
      }])
    
  },
  reducers: {  

    // Текст в инпуте
    setValue: (state, action) => {
      state.inputNameTask = action.payload
    },

    // Удаление текста из инпута после нажатия кнопки Добавить
    delValue: (state, action) => {
      state.inputNameTask = action.payload
    },    

    // Добавление задачи в список
    addTaskToState: {
      reducer(state, action) {
        state.tasks.push(action.payload);
        state.inputNameTask='';        
      },

      prepare(value){       
        return {
          payload: {
            id: nanoid(),
            date:new Date().getTime(),
            taskItemText: value,
            timeSinceStart: 20,
            counterForTimer: 20,
            counterForPause: 0,
            pomodoroCount: 1
          },
        };
      },
    },

    // Новый список задачь после удаления одной из задач
    setNewTasksArr:(state, action) => {
      state.tasks = action.payload
    },

    // decrement для таймера
    decrementForTimer: state => {
      state.tasks[0].counterForTimer -= 1
    },
     // decrement для таймера Пауза 5 минут
    decrementForTimerPause: state => {
      state.pauseTimer -= 1
    },
    // Установить Паузу в 300 сукунд (5 минут)
    setForTimerPause: state => {
      state.pauseTimer = 15
    },
     // increment для таймера
    incrementForTimer: state => {      
      state.tasks.counterForTimer += 30
    },

    // increment для Времени на паузе
    incrementForPause: state => {    
      state.tasks[0].counterForPause += 1
    },

    // Сброс счётчика в первоначальное положение
    resetForTimer: state => {
      state.tasks[0].counterForTimer = state.tasks[0].timeSinceStart
    },
    
     // Помещаем первую задачу в массив с выполненными заданиями
     setNewСompletedTaskArr: state => {
      state.completedTasks.unshift(state.tasks[0]);      
    },

    // Цвет для блока вверху таймера Красный
    setColorRed:(state) => {
      state.bacgroundTop = 'start';
    },

    // Цвет для блока вверху таймера Зелёный
    setColorGreen:(state) => {
      state.bacgroundTop = 'pause';
    },

     // Цвет для блока вверху таймера Зелёный
     setColorGrey: (state) => {
      state.bacgroundTop = 'null';
    },

    // Состояние для текущей недели в статистике
    setThisWeekAgo:(state) => {
      state.whatAweek = 'thisweek';
    },

     // Состояние для выбора 1 неделю назад в статистике
     set1WeekAgo:(state) => {
      state.whatAweek = 'lastweek';
    },

    // Состояние для выбора 2 недели назад в статистике
    set2WeeksAgo:(state) => {
      state.whatAweek = '2weeksago';
    },

     // Массив задачь по 1у выбранному дню для статистики за 1 день
     setArrTasksForDay:(state, action) => {
      state.arrTasksForDay = action.payload;
    },

    // Массив для красного фона
    setDayBackRed:(state, action) => {
      state.arrDayBackRed = action.payload;
    },

     // Массив для текущей недели в сторе
     setCurrentWeek:(state, action) => {
      state.currentWeek = action.payload;
    },

     // Массив для прошлой недели в сторе
     setLastWeek:(state, action) => {
      state.lastWeek = action.payload;
    },

     // Массив для 2 недели назад в сторе
     setLast2Week:(state, action) => {
      state.last2Week = action.payload;
    },

    // Редактирование названия задания
    setNewTaskName:(state, action) => {
      // Найдём нужное задание для редактирования по id
      let foundItem = state.tasks.find(item => item.id === action.payload);
      // Установим название в инпут
      state.inputNameTask = foundItem.taskItemText;
      // Установим в стор id задания для поиска в массиве заданий
      state.idForChangeTask = foundItem.id;
    },

    // Состояние для текущей недели в статистике
    setIsEditChange:(state) => {
      state.isEdit = !state.isEdit;
    },

    // Сохранение задания после изменения названия
    setAddTaskToStateAfterChange:(state, action) => {
      // Найдём нужное задание для редактирования по id
       state.tasks.find(item => {
        if (item.id === state.idForChangeTask) {
            item.taskItemText = action.payload;
            return true;
        }
    });
      state.inputNameTask = '';
      state.idForChangeTask = '';

    },

    // Состояние для Увеличения количества времени на задачу в сторе
    setTimerUp:(state) => {
      state.tasks[0].counterForTimer += 2
    },

    // Увеличения количества помидоров для текущего задания
    setPomodorUp:(state) => {
      if(state.tasks[0].pomodoroCount >=4 ) return;
      state.tasks[0].pomodoroCount += 1
      state.tasks[0].counterForTimer += 20
    },

      // Увеличения количества помидоров для текущего задания
      setPomodorDown:(state) => {
        if(state.tasks[0].pomodoroCount <=1 ) return;
        state.tasks[0].pomodoroCount -= 1
        state.tasks[0].counterForTimer -= 20
      },    
  }
})


export const store = configureStore({
  reducer: counterSlice.reducer
})

window.store = store;


// Селекторы

// Значение для инпута
export const selectCount = state => state.inputNameTask

// Массив для отображения начальных задачь
export const selectArrTasks = state => state.tasks


// Сохранение данных в localStorage

store.subscribe(()=>{
  localStorage['redux-store']=JSON.stringify(store.getState())
})

export const { addTaskToState } = counterSlice.actions;
export default counterSlice?.reducers;


