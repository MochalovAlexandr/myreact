import s from './layout.module.css';



export function Layout() {
  return (
    <div className={s.layout}>
     
    </div>
  );
}



// eslint-disable-next-line react/prop-types
export function Button({ children }) {
 
  return (
    <button>
      {children}
    </button>
  );
}