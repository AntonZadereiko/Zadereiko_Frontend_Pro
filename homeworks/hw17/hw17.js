
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

// examples
const onTick = (time) => console.log(time);
const stopWatch = new StopWatch(onTick);

stopWatch.start();

// paused in 3 seconds
setTimeout(() => {
    stopWatch.pause();
    console.log(stopWatch.getTime());
}, 3000);

// in 5 seconds do reset
setTimeout(() => {
    stopWatch.reset();
    console.log(stopWatch.getTime());
}, 5000);