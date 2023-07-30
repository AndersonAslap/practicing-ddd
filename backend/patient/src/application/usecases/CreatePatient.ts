import { Patient } from "../../domain/Patient"
import { RepositoryFactory } from '../factory/RepositoryFactory'
import { PatientRepository } from '../repository/PatientRepository'
import { UseCase } from './UseCase'

export class CreatePatient implements UseCase {
    patientRepository: PatientRepository

    constructor(repositoryFactory: RepositoryFactory){
        this.patientRepository = repositoryFactory.createPatientRepository()
    }

    async execute(input: Input) : Promise<void> {
        const patient = new Patient(input.id, input.name, input.birthday, input.gender)
        await this.patientRepository.create(patient)
    }
}

type Input = {
    id: string 
    name: string 
    birthday: Date 
    gender: string
}