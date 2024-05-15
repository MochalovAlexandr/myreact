import s from './Header.module.css';
import logo from '../../assets/img/tomato.svg';
import stat from '../../assets/img/stat.svg';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <div className={s.header}>
      <Link to={"/"} className={s.logo}>
        <img
          className={s.logoimg}
          src={logo}
          alt="logo"
        />
        <span className={s.logotext}>pomodoro_box</span>
      </Link>
      <Link to={"/stat"} className={s.stat}>
        <img
          className={s.statimg}
          src={stat}
          alt="stat"
        />
        <span className={s.stattext}>Статистика</span>
      </Link>
    </div>
  );
}


