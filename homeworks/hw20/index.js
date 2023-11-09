import StopWatch from './stopwatch.js';
import StopwatchUI from './stopwatch-ui.js';

const initialTime = {hours: 0, minutes: 0, seconds: 0};

const ui = new StopwatchUI(initialTime);
const onTick = (time) => ui.setTime(time);
const stopwatch = new StopWatch(onTick);

ui.addStartBtnListener(e => stopwatch.start());
ui.addPauseBtnListener(e => stopwatch.pause());
ui.addResetBtnListener(e => stopwatch.reset());

ui.appendStopwatch(document.body);



function addTimer() {
    const initialTime = { hours: 0, minutes: 0, seconds: 0 };
    const ui = new StopwatchUI(initialTime);
    const stopwatch = new StopWatch(ui.setTime.bind(ui), initialTime);

    ui.addStartBtnListener((e) => stopwatch.start());
    ui.addPauseBtnListener((e) => stopwatch.pause());
    ui.addResetBtnListener((e) => stopwatch.reset());

    ui.appendStopwatch(document.body);
}

const addTimerBtn = document.querySelector('#timer');
addTimerBtn.addEventListener('click', addTimer);


