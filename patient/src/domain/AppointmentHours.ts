import { Timer } from "./@shared/value-object/Timer"

export class AppointmentHours {
    timer : Timer

    constructor(readonly id: string, readonly day: string, timer: string){
        this.timer = new Timer(timer)
        this.validate()
    }

    validate() {
        if(!this.id) throw new Error("Id is required")
    }
}