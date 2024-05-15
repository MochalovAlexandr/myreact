import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import s from './Dropdown.module.css';
import { useRef } from 'react';



// eslint-disable-next-line react/prop-types
export const Dropdown = ({ button, children}) => {
  const refContainer = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [buttonCoordinates, setButtonCoordinates] = React.useState({});
 

  //Закрыть меню по клику снаружи меню
  useEffect(() => {
    function handleClick(e) {      
  // Если элемент, куда нажал, элемент от Node и рефСсылка не содержит этот элемент
  // тогда переключается на true
      if(e.target instanceof Node &&
           !refContainer.current?.contains(e.target) &&
           (e.target.tagName !== "LI")&&(e.target.tagName !== "P")) 
           {
              setIsDropdownOpen(false);
            }     
  
    }
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    }
    
  }, [isDropdownOpen]);  


  const handleOpen = () => {    
    let rect = refContainer.current?.getBoundingClientRect();
    if (!rect) return null;
    let dropdownCoordinates = {
      top: Math.round(rect?.top + rect?.height + 5),
      left: Math.round(rect?.left + rect?.width - 105)      
    };
      
    setIsDropdownOpen(!isDropdownOpen);
    console.log('Переключился Дропдаун');
    setButtonCoordinates(dropdownCoordinates);
  };
 
  const drop = document.querySelector("#menu_portal");
  if (!drop) return null;
  return (
    <div className={s.container} ref={refContainer} >
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen &&
        ReactDOM.createPortal(
          <div
            className={s.listContainer}
            style={{
              top: buttonCoordinates?.top + window.scrollY,
              left: buttonCoordinates?.left + window.scrollX,             
            }}
          >
            <div
              className={s.list}              
            >
              {children}
            </div>
          </div>,
          drop
        )}
    </div>
  );
}