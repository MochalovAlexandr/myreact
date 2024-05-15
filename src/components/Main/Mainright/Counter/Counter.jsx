/* eslint-disable react/prop-types */
import { useDispatch, useSelector} from 'react-redux';
import { timeForComponent } from '../../../../utilities/showTime';
import s from './Counter.module.css';
import { addNewTasksArrAC, addNewСompletedTaskArrAC, counterForTimerAC, counterForTimerPauseAC, resetForTimerAC, setColorGreenAC, setColorGreyAC, setColorRedAC, setCounterForTimerPauseAC, timerUpAC } from '../../../../redux/AC/actionCrieters';
import { useEffect, useState } from 'react';
import { counterForPauseAC } from '../../../../redux/AC/actionCrieters';
import { selectArrTasks } from '../../../../redux/store';
import { selectTimerPause } from '../../../../redux/selectors/selectors';

// eslint-disable-next-line react/prop-types
export const Counter = ({firstTask, counterForTimer, counterForPause}) => {
  let time = timeForComponent(firstTask?.timeSinceStart);
 let dispatch = useDispatch();

  const [stateForButtonLeft, setStateForButtonLeft]=useState({state:'forStart'});

  // При рервой загрузке Показывает кнопку Старт
  // Нажата Старт показывается кнопка Пауза forPause
  // Нажата Пауза показывается кнопка Продолжить forContinue
  // Нажата Продолжить показывается кнопка Старт forStart
  const [stateForButtonRight, setStateForButtonRight]=useState({state:'forStop'});



// При нажатии на кнопку Старт Включается счётчик
  const [enabled, setEnabled]=useState(false);

  function handleClickStop(){  
    // Отключает основной счётчик      
    setEnabled(false);
    // Показывает кнопку Старт
    setStateForButtonLeft({state:'forStart'});

    // Сбросить счётчик до начального состояния !---------------------------------------------------------------------------------------------------
    // Задиспатчить АС
    dispatch(resetForTimerAC());

    // При нажатии на кнопку Стоп ВКЛЮЧАЕМ счётчик Времени на паузе
    }
  

 const handleClickStart = ()=>{
    // Запускает таймер Старт
    setEnabled(true);
    // Дисейблит кнопку для предотвращения повторного запуска (нажатия)
    // setIsDisableButtonStart(true);

    // При нажатии на кнопку Старт ОТКЛЮЧАЕМ счётчик Времени на паузе
    setEnabledPause(false);

    // Переключаем стэйт для левой кнопки В Пауза
    setStateForButtonLeft({state:'forPause'});
    
      console.log(stateForButtonLeft.state);

    //Верх таймера в красный цвет
    // dispatch(setColorRedAC());
  }

  const handleClickPause = () =>{
    setEnabled(false);
    setStateForButtonLeft({state:'forContinue'});
    // При нажатии на кнопку Стоп ВКЛЮЧАЕМ счётчик Времени на паузе
    setEnabledPause(true);
    setStateForButtonRight({state:'forMade'});
  }

  const handleClickContinue = () =>{
    setEnabled(true);
    setEnabledPause(false);
    setStateForButtonLeft({state:'forPause'});
    setStateForButtonRight({state:'forStop'});
  }


  // Массив задач
  const taskItems = useSelector(selectArrTasks);

  // Обработчик для кнопки Выполнено
  const handleClickMade = () =>{
    console.log('Сделано!');
    // Удаляем задачу из списка
    let newArrTask = taskItems.filter(task => task.id !== firstTask.id);
    dispatch(addNewTasksArrAC(newArrTask));   
    setEnabledPause(false);
    setStateForButtonRight({state:'forStop'});
    setStateForButtonLeft({state:'forStart'});
  }

  
  // Для таймера обратного отсчёта

  useEffect(()=>{
      if (!enabled) return;
      //Верх таймера в красный цвет
      dispatch(setColorRedAC());
      const i =setInterval(()=>{
        dispatch(counterForTimerAC());
      }, 1000);
      return()=>{
        clearInterval(i);
      };
    }, [dispatch, enabled]);

  // Для таймера Времени на паузе
  const [enabledPause, setEnabledPause]=useState(false);
  useEffect(()=>{
    if (!enabledPause) return;
    const i =setInterval(()=>{
      dispatch(counterForPauseAC());
    }, 1000);
    return()=>{
      clearInterval(i);
    };
  }, [dispatch, enabledPause]);


 // Останавливает таймер, когда время = 0.
 // И здесь нужно включить таймер с паузой в 5 минут



 // РАБОТАЕТ !!! 
 // Массив без первой задачи для обновления Стора
 let newArrTask = taskItems.filter(task => task.id !== firstTask.id);
  useEffect(()=>{
    
    if(counterForTimer === 0){
      // Прибавляем 1у помидорку к задаче, 1а выполненная задача- 1а помидорка.
      // Останавлмваем отсчёт таймера на нуле
      setEnabled(false);
      // Отображаем кнопку Старт
      setStateForButtonLeft({state:'forStart'});
      // Помещаем первую задачу в массив с выполненными заданиями, в редюсере.
      dispatch(addNewСompletedTaskArrAC());
      // Удаляем обект из списка задачь
      // Удаляем задачу из списка    
      dispatch(addNewTasksArrAC(newArrTask));

      // Запускаем таймер на 5 минут
      setTimerPause(true);
      //Верх таймера в зелёный цвет
      dispatch(setColorGreenAC());
    }
  }, [counterForTimer, dispatch, newArrTask])
  // Состояние для кнопки Старт
  let [isDisableButtonStart, setIsDisableButtonStart] = useState(false);

  // Показать таймер на 5 минут, пауза мужду заданиями.
  let [timerPause, setTimerPause]=useState(false);

  let pauseFiveMinutes = useSelector(selectTimerPause);

// Для таймера обратного отсчёта Паузы на 5 минут

useEffect(()=>{
  if (!timerPause) {
    // активирует кнопки когда пауза заканчивается
    setIsDisableButtonStart(false);
    //Верх таймера в серый цвет
    dispatch(setColorGreyAC());
    return;
  } 
  // Дисэйблтм кнопки Старт и Стоп.
  setIsDisableButtonStart(true);

  const i =setInterval(()=>{
    dispatch(counterForTimerPauseAC());
  }, 1000);
  return()=>{
    clearInterval(i);
  };
}, [dispatch, timerPause]);

// Отключить таймер пауза 5 минут.

useEffect(()=>{
    
  if(pauseFiveMinutes === 0){
    setTimerPause(false);
    dispatch(setCounterForTimerPauseAC());    

    // // Запускаем таймер на 5 минут
  }
}, [pauseFiveMinutes, dispatch, newArrTask])


function handleTimerUp(){
  console.log(555);
  dispatch(timerUpAC());
}

  return (
    <div className={s.counter}>
      <div className={s.counterwrapper}>
        { !timerPause ?
        <span className={s.countertime}>{time===counterForTimer ? time : timeForComponent(counterForTimer)}</span> :
        <span className={s.countertime}>{timeForComponent(pauseFiveMinutes)}</span>
        }
        <button href='#' className={s.counterbutton} onClick={handleTimerUp}>
         
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="25" fill="#C4C4C4" />
            <path d="M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z" fill="white" />
          </svg>
        </button>
      </div>
      <div className={s.tasknamewrap}>
        <span className={s.tasknumber}>Задача 1 -{'\u00A0'}</span>
        <span className={s.taskname}>{firstTask?.taskItemText===undefined ? 'Список задач пуст' : firstTask.taskItemText }</span>
      </div>
      <div className={s.counterbuttons}> 
       
        {stateForButtonLeft.state==='forStart' && <button className={s.buttonstart} onClick={handleClickStart} disabled={isDisableButtonStart}>Старт</button>}
        {stateForButtonLeft.state==='forPause' && <button className={s.buttonstart} onClick={handleClickPause}>Пауза</button>}
        {stateForButtonLeft.state==='forContinue' && <button className={s.buttoncontinue} onClick={handleClickContinue}>Продолжить</button>}


        {stateForButtonRight.state==='forStop' && <button className={s.buttonstop} onClick={handleClickStop} disabled={isDisableButtonStart}>Стоп</button>}
        {stateForButtonRight.state==='forMade' && <button className={s.buttonmade} onClick={handleClickMade}>Сделано</button>}

        
        <span>{counterForTimer}{'\u00A0'}</span>
        <span>{counterForPause}</span>
      </div>
    </div>
  );
}

