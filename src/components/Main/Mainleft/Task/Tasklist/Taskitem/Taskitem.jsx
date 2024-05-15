/*eslint no-unused-vars: "error"*/
/* exported global_var */
import s from './Taskitem.module.css';
import { Dropdown } from './Dropdown/Dropdown';
import { Droplist } from './Dropdown/Droplist/Droplist';



// eslint-disable-next-line react/prop-types
export const Taskitem = ({ taskitemnum, taskitemtext, itemId }) => {


  return (
    <li className={s.taskitem}>
      <a className={s.taskitemlink} href='#'>
        <span className={s.taskitemnum}>{taskitemnum}</span>
        <p className={s.taskitemtext}>{taskitemtext}</p>
      </a>     
      <Dropdown
        onClose={() => console.log('closed')}
        onOpen={() => console.log('opened')}
        button={
          <button className={s.taskitembtn}>   
            <svg width="26" height="6" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="#C4C4C4" />
              <circle cx="13" cy="3" r="3" fill="#C4C4C4" />
              <circle cx="23" cy="3" r="3" fill="#C4C4C4" />
            </svg>
          </button>          
        }
      >
       <Droplist postId='1234' itemId={itemId}/>
      </Dropdown>
    </li>
  );
}



