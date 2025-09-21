const timeEl = document.getElementById('timer');
const markList = document.getElementById('mark-list');
let intervalid = 0;
let timer = 0;
let marks = [];

// FORMATANDO PARA TIME
const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const hundredlhs = time % 100;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredlhs.toString().padStart(2, '0')}`;
};
// FIM FORMATANDO PARA TIME



// MARK TIME
const addMarkList = (markindex, marktime) => {
    markList.innerHTML += `<p>Marca ${markindex}: ${formatTime(marktime)}`
}

const marktime = () => {
    marks.push(timer);
    addMarkList(marks.length, timer);
}
// FIM MARK TIME


// POWER ACTION
const toggleTimer = () => {
    const button = document.getElementById('power');
    const action = button.getAttribute('action');

    clearInterval(intervalid);

    if(action == 'start' || action == 'continue') {
        intervalid = setInterval(() => {
            timer += 1;
            setTimer(timer)
        }, 10);
        button.setAttribute('action', 'pause');
        button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else if (action == 'pause') {
        button.setAttribute('action', 'continue');
        button.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
};
// FIM POWER ACTION


// RESET TIMER
const resetTimer = () => {
    clearInterval(intervalid);
    timer = 0;
    marks = [];
    setTimer(timer);
    markList.innerHTML = '';
    const button = document.getElementById('power');
    button.setAttribute('action', 'start');
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
}
// FIM RESET TIME

const setTimer = (time) => {
    timeEl.innerHTML = formatTime(time);
};

// Eventos de Click dos Button
document.getElementById('power').addEventListener('click', toggleTimer);
document.getElementById('mark').addEventListener('click', marktime);
document.getElementById('reset').addEventListener('click', resetTimer);