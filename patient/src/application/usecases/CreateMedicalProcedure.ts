import { MedicalProcedure } from "../../domain/MedicalProcedure"

export class CreateMedicalProcedure {

    constructor(){
    }

    async execute(input: Input) : Promise<any> {
        const medicalProcedure = new MedicalProcedure(input.id, input.specialty, input.description, input.price)
        return medicalProcedure
    }
}

type Input = {
    id: string
    specialty: string
    description: string
    price: number
}