import s from './Mainleft.module.css';

// eslint-disable-next-line react/prop-types
export const Mainleft = ({children}) => {
  return (
    <div className={s.mainleft}>
     {children}
    </div>
  );
}

