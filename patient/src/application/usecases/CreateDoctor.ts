import { Doctor } from "../../domain/Doctor"
import { Email } from "../../domain/Email"

export class CreateDoctor {

    constructor(){
    }

    async execute(input: Input) : Promise<any> {
        if (input.email instanceof Email) input.email = input.email.value
        const doctor = new Doctor(input.id, input.name, input.specialty, String(input.email), input.phone)
        return doctor
    }
}

type Input = {
    id: string,
    name: string,
    specialty: string,
    email: string | Email,
    phone: string
}