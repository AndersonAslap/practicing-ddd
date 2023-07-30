import { Patient } from "../../domain/Patient"
import { RepositoryFactory } from '../factory/RepositoryFactory'
import { PatientRepository } from "../repository/PatientRepository"

export class CreatePatient {
    patientRepository: PatientRepository

    constructor(readonly repositoryFactory: RepositoryFactory){
        this.patientRepository = this.repositoryFactory.createPatientRepository()
    }

    async execute(input: Input) : Promise<any> {
        const patient = new Patient(input.id, input.name, input.birthday, input.gender)
        await this.patientRepository.create(patient)
        return patient
    }
}

type Input = {
    id: string 
    name: string 
    birthday: Date 
    gender: string
}