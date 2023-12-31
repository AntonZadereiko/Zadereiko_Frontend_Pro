class StopWatch {
    constructor(onTick) {
        this.onTick = onTick;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    tick() {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours++;
            }
        }
        const time = { hours: this.hours, minutes: this.minutes, seconds: this.seconds };
        this.onTick(time);
    }

    pause() {
        clearInterval(this.intervalId);
    }

    reset() {
        this.pause();
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
    }

    getTime() {
        return { hours: this.hours, minutes: this.minutes, seconds: this.seconds };
    }
}


const timeDisplay = document.getElementById("time-display");
const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const resetButton = document.getElementById("reset-button");

const stopwatch = new StopWatch(updateTimeDisplay);

function updateTimeDisplay(time) {
    const formattedTime = `${String(time.hours).padStart(2, "0")}:${String(time.minutes).padStart(2, "0")}:${String(time.seconds).padStart(2, "0")}`;
    timeDisplay.innerText = formattedTime;
}
startButton.addEventListener("click", () => {
    stopwatch.start();
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = true;
});

pauseButton.addEventListener("click", () => {
    stopwatch.pause();
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;
});

resetButton.addEventListener("click", () => {
    stopwatch.reset();
    stopwatch.pause();
    updateTimeDisplay({ hours: 0, minutes: 0, seconds: 0 });
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
});