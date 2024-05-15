import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Stat } from "./components/Stat/Stat";
import { useArrLastWeeks } from "./utilities/arrForGraph";
import { useDispatch } from "react-redux";
import { setCurrentWeekAC, setLast2WeekAC, setLastWeekAC } from "./redux/AC/actionCrieters";
import { useEffect } from "react";



function App() {
  let dispatch = useDispatch();
 
  // Текущая неделя
 let currentWeek = useArrLastWeeks()[6];
//  console.log(currentWeek); 
 // Прошлая неделя
 let lastWeek = useArrLastWeeks()[7];
//  console.log(lastWeek);
// Прошлая неделя
let last2Week = useArrLastWeeks()[8];
// console.log(last2Week);

useEffect(()=>{
 
  dispatch(setCurrentWeekAC(currentWeek));
 
  dispatch(setLastWeekAC(lastWeek));

  dispatch(setLast2WeekAC(last2Week));
});

  return (
    <BrowserRouter>    
      <div className="app-wrapper">
        <Header />
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/stat' element={<Stat/>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
