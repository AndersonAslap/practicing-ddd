import { AgendaConsult } from "../../domain/entity/AgendaConsult"
import { Doctor } from "../../domain/entity/Doctor"
import { Patient } from "../../domain/entity/Patient"

export class CreateAgendaConsult {

    constructor(){
    }

    async execute(input: Input) {
        const patient = new Patient(input.patient.id, input.patient.name)
        const doctor = new Doctor(input.doctor.id, input.doctor.name, input.doctor.specialty)
        const agendaConsult = new AgendaConsult(input.id, patient, doctor, input.date, input.timer, input.estimatedHours)
        return agendaConsult
    }
}

type Input = {
    id: string 
    doctor: {
        id: string,
        name: string,
        specialty: string
    }
    patient: {
        id: string,
        name: string
    }
    date: Date 
    timer: string 
    estimatedHours: number
}