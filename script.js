let timer;
sec = 0;
min = 0;
hour = 0;

let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');
const timerEl = document.getElementById('timer');

startBtn.addEventListener('click', () => {
    timer = setInterval(TimerHandler, 1000);
    startBtn.disabled = true;
    resetBtn.disabled = true;
    pauseBtn.disabled = false;
})

pauseBtn.addEventListener('click', () => {
    timer = clearInterval(timer);
    resetBtn.disabled = false;
    startBtn.disabled = false;
})  

resetBtn.addEventListener('click', () => {
    timer = clearInterval(timer);
    resetBtn.disabled = true;
    pauseBtn.disabled = true;
    miliSec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    timerEl.innerHTML = '00:00:00';
})  


function TimerHandler() {
    sec++;

    if (sec == 60) {
        sec = 0;
        min++;
    }

    if (min == 60) {
        min = 0;
        hour++;
    }
 
    displayTime();
}

function displayTime() {
    let sec_0 = sec;
    let min_0 = min;
    let hour_0 = hour;

    if (sec < 10) {
        sec_0 = '0' + sec;
    }

    if (min < 10) {
        min_0 = '0' + min;
    }

    if (hour < 10) {
        hour_0 = '0' + hour;
    }

    timerEl.innerHTML = `${hour_0}:${min_0}:${sec_0}`;
}