import { Patient } from "../../domain/Patient"

export class CreatePatient {

    constructor(){
    }

    async execute(input: Input) : Promise<any> {
        const patient = new Patient(input.id, input.name, input.birthday, input.gender)
        return patient
    }
}

type Input = {
    id: string 
    name: string 
    birthday: Date 
    gender: string
}