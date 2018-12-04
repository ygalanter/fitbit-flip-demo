import clock from "clock";
import { FitbitFlip } from 'fitbit-flip';

const hour1 = new FitbitFlip({id: "hour1", img_width: 84,img_height: 67, duration: 1});
const hour2 = new FitbitFlip({id: "hour2", img_width: 84,img_height: 67, duration: 1});
const minute1 = new FitbitFlip({id: "minute1", img_width: 64,img_height: 47, duration: 1});
const minute2 = new FitbitFlip({id: "minute2", img_width: 64,img_height: 47, duration: 1});


function changeTime(elem, oldTime, newTime) {
 
    elem.startStaticImage = `digits/${newTime}top.png`; 
    elem.endImage = `digits/${newTime}bottom.png`; 
    elem.startImage = `digits/${oldTime}top.png`; 
    elem.endStaticImage = `digits/${oldTime}bottom.png`; 

    elem.flip();

}

function updateClock() {

    let today = new Date();
    
    let hours = today.getHours();
    let h1 = Math.floor(hours/10);
    let h2 = hours % 10;
    
    let mins = today.getMinutes();
    let m1 = Math.floor(mins/10);
    let m2 = mins % 10;
    
    if (timeh1 != h1 || !initialized) { 
      changeTime(hour1, timeh1, h1)
      timeh1 = h1;
    }
    
     if (timeh2 != h2 || !initialized) {
      changeTime(hour2, timeh2, h2);
      timeh2 = h2;
    }
      
    if (timem1 != m1 || !initialized) {
      changeTime(minute1, timem1, m1)  
      timem1 = m1;
    }
    
    if (timem2 != m2 || !initialized) {
      changeTime(minute2, timem2, m2)
      timem2 = m2;
    }

    initialized = true;
}

let timeh1 = 0; let timeh2 = 0; let timem1 = 0; let timem2 = 0; let initialized = false;

clock.granularity = "minutes";
clock.ontick = updateClock;
