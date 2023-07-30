import { Doctor } from "../../domain/Doctor"

export class CreateDoctor {

    constructor(){
    }

    async execute(input: Input) : Promise<any> {
        const doctor = new Doctor(input.id, input.name, input.specialty, input.email, input.phone)
        return doctor
    }
}

type Input = {
    id: string,
    name: string,
    specialty: string,
    email: string,
    phone: string
}