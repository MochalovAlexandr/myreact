
export let timeForComponent=(time)=>{
    if(!time) return;
    let hours = Math.floor(time / 60 / 60);
    let minutes = Math.floor(time / 60) - (hours * 60);
    let seconds = time % 60;

    let formattedWithHours = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
      ].join(':');


    let  formattedWithouthHours = [        
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
      ].join(':');     
      

      return hours>=1 ? formattedWithHours : formattedWithouthHours;
}


{/* <p className={s.alltimetext}>{allTime>59 ? Math.floor(allTime/60) + ` ${time} ` + allTime%60+ ' мин' : `${allTime}` +  ' мин'}</p> */}


// TimeInSeconds=61
// TimeSrt=(new Date(TimeInSeconds * 1000).toISOString().substr(11, 12))
// -->00.01.01:000

// //or
// TimeInSeconds=61
// TimeSrt=(new Date(TimeInSeconds * 1000).toISOString().substr(11, 8))
// -->00.01.01

// long Tsec;
// int Time[4] = 0;
// ...
// Time[0] = TSec / 86400; //Day
// Time[1] = (TSec % 86400) / 3600; //HH
// Time[2] = (TSec % 3600) / 60; //MM
// Time[3] = TSec % 60; //SS

// Как-то так можно, если время не больше одного дня, если больше (но не больше месяца), то split на replace можно заменить

// var seconds=600
// console.log(new Date(seconds*1000).toUTCString().split(/ /)[4]);

// function pad2(num) {
//     var s = num.toString();
//     return (s.length < 2) "0" + s : s;
// }

// var m = Math.floor(seconds / 60);
// var s = seconds % 60;
// var h = Math.floor(m / 60);
// m = m % 60;
// var result = pad2(h) + ":" + pad2(m) + ":" + pad2(s);


// function pad2(num) {
//     var s = num.toString();
//     return (s.length < 2) "0" + s : s;
// }

// var m = Math.floor(seconds / 60);
// var s = seconds % 60;
// var h = Math.floor(m / 60);
// m = m % 60;
// var result = pad2(h) + ":" + pad2(m) + ":" + pad2(s);