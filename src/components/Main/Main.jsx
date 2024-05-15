/*eslint no-unused-vars: "error"*/
/* exported global_var */
import s from './Main.module.css';
import { Rules } from './Mainleft/Rules/Rules';
import { Mainleft } from './Mainleft/Mainleft';
import { Task } from './Mainleft/Task/Task';
import { Mainright } from './Mainright/Mainright';
import { AllTime } from './Mainleft/AllTime/AllTime';



export const Main = () => {
  return (
    <div className={s.main}>
     <Mainleft>
      <Rules/>
      <Task/>
      <AllTime/>
     </Mainleft>
     <Mainright/>
    </div>
  );
}

// export default Layout

