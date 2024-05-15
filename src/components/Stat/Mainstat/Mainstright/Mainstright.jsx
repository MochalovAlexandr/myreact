/*eslint no-unused-vars: "error"*/
/* exported global_var */
import { Mainstbot } from './Mainstbot/Mainstbot';
import { Mainstgraph } from './Mainstgraph/Mainstgraph';
import s from './Mainstright.module.css';
import { Mainsttime } from './Mainsttime/Mainsttime';


export const Mainstright = () => {
  return (
    <div className={s.mainstright}>      
      <Mainsttime/>
      <Mainstbot/>
      <Mainstgraph/>
    </div>
  );
}


