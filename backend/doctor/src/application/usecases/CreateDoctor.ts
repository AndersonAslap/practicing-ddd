import { UseCase } from './UseCase'
import { Doctor } from "../../domain/Doctor"
import { DoctorRepository } from '../repository/DoctorRepository'
import { RepositoryFactory } from '../factory/RepositoryFactory'

export class CreateDoctor implements UseCase {
    doctorRepository: DoctorRepository

    constructor(repositoryFactory: RepositoryFactory){
        this.doctorRepository = repositoryFactory.createDoctorRepository()
    }

    async execute(input: Input) : Promise<any> {
        const doctor = new Doctor(input.id, input.name, input.specialty, input.email, input.phone)
        await this.doctorRepository.create(doctor)
    }
}

type Input = {
    id: string,
    name: string,
    specialty: string,
    email: string,
    phone: string
}