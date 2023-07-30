import { AgendaConsult } from "../../domain/AgendaConsult"
import { Doctor } from "../../domain/Doctor"
import { Patient } from "../../domain/Patient"

export class CreateAgendaConsult {

    constructor(){
    }

    async execute(input: Input) {
        const agendaConsult = new AgendaConsult(input.id, input.patient, input.doctor, input.date, input.timer, input.estimatedHours)
        return agendaConsult
    }
}

type Input = {
    id: string 
    doctor: Doctor
    patient: Patient
    date: Date 
    timer: string 
    estimatedHours: number
}