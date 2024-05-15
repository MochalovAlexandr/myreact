/*eslint no-unused-vars: "error"*/
/* exported global_var */
import s from './Stat.module.css';

import { Topstat } from './Topstat/Topstat';
import { Mainstat } from './Mainstat/Mainstat';
import { Bottomstat } from './Bottomstat/Bottomstat';


export const Stat = () => {
  

  return (
    <div className={s.stat}>
      <Topstat/>
      <Mainstat/>
      <Bottomstat/>
    </div>
  );
}


