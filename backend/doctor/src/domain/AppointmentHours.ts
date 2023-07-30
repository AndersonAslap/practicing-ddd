import { Timer } from "./Timer"

export class AppointmentHours {
    timer : Timer

    constructor(readonly day: string, timer: string){
        this.timer = new Timer(timer)
    }
}