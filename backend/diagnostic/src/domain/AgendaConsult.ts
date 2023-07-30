import { Doctor } from "./Doctor"
import { Patient } from "./Patient"
import { Timer } from "./@shared/value-object/Timer"

export class AgendaConsult {
    timer: Timer 

    constructor(readonly id: string, readonly patient: Patient, readonly doctor: Doctor, readonly date: Date, timer: string, readonly estimatedHours: number){
        this.timer = new Timer(timer)
        this.validate()
    }

    validate() {
        if(!this.id) throw new Error("Id is required") 
        if(this.date.toString() === "Invalid Date") throw new Error("Date is invalid")
        if(this.estimatedHours <= 0) throw new Error("Estimated hours is invalid")
    }
}