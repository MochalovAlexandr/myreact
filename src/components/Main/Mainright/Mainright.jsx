import { useSelector } from 'react-redux';
import { Counter } from './Counter/Counter';
import s from './Mainright.module.css';
import { Timertop } from './Timertop/Timertop';
import { selectArrTasks } from '../../../redux/store';
import { selectBacgroundTop, selectCounterForTimer } from '../../../redux/selectors/selectors';
import { selectCounterForPause } from '../../../redux/selectors/selectors';


// eslint-disable-next-line react/prop-types
export const Mainright = () => {
  let firstTask=useSelector(selectArrTasks)[0];
  let counterForTimer = useSelector(selectCounterForTimer);
  let counterForPause = useSelector(selectCounterForPause);
  let backgroundTop = useSelector(selectBacgroundTop);

  return (
    <div className={s.mainright}>
     <Timertop backgroundTop={backgroundTop} firstTask={firstTask}/>
     <Counter firstTask={firstTask} counterForTimer={counterForTimer} counterForPause={counterForPause}/>
    </div>
  );
}

