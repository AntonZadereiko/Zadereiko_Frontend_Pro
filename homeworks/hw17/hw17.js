class StopWatch {
    constructor(onTick) {
        this.onTick = onTick;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.timeoutId = null;
        this.isPaused = false;
    }
    start(){
        this.tick();
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
        const time = {
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds
        };
        this.onTick(time);

        this.timeoutId = setTimeout(() => {
            this.tick();
        }, 1000);
    }
    pause() {
        if (!this.isPaused) {
            clearTimeout(this.timeoutId);
            this.isPaused = true;
        }
    }
    resume() {
        if (this.isPaused) {
            this.isPaused = false;
            this.start();
        }
    }
    reset(){
        this.pause();
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }
    getTime() {
        return {
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds
        };
    }
}

// examples
const onTick = (time) => console.log(time);
const stopWatch = new StopWatch(onTick);

stopWatch.start();

setTimeout(() => {
    stopWatch.pause();
    console.log("Секундомір призупинено:", stopWatch.getTime());
}, 5000);

setTimeout(() => {
    console.log("Секундомір відновлено");
    stopWatch.resume();
}, 7000);


setTimeout(() => {
    stopWatch.reset();
    console.log("Секундомір скинуто:", stopWatch.getTime());
}, 10000);