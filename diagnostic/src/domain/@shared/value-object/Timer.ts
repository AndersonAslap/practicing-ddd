export class Timer {
    value : string

    constructor(timer: string) {
        this.value = timer
        this.validate()
    }

    isTimerValid() {
        const [hour, minutes] = this.value.split(':').map(Number);
        if (isNaN(hour) || isNaN(minutes)) return false;
        return (hour >= 0 && hour <= 23 && minutes >= 0 && minutes <= 59);
    }

    validate() {
        if(!this.isTimerValid()) throw new Error("Timer is invalid")
    }
}