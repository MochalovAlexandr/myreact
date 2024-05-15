/*eslint no-unused-vars: "error"*/
/* exported global_var */
import { Mainstleft } from './Mainstleft/Mainstleft';
import s from './Mainstat.module.css';
import { Mainstright } from './Mainstright/Mainstright';




export const Mainstat = () => {
  return (
    <div className={s.mainstat}>      
      <Mainstleft/>
      <Mainstright/>
    </div>
  );
}


