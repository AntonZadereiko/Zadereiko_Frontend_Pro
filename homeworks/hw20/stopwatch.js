class StopWatch {
    constructor(onTick) {
        this.onTick = onTick;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.intervalId = null;
        this.isRunning = false;
    }
    start() {
        if (!this.isRunning){
            clearInterval(this.intervalId);
        }
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
export default StopWatch;