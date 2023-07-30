import { Patient } from "../../domain/Patient";
import { RepositoryFactory } from "../factory/RepositoryFactory";
import { PatientRepository } from "../repository/PatientRepository";
import { UseCase } from "./UseCase";

export class GetAllPatients implements UseCase {
    patientRepository: PatientRepository

    constructor(repositoryFactory: RepositoryFactory) {
        this.patientRepository = repositoryFactory.createPatientRepository()
    }

    async execute(): Promise<Output> {
        const output = await this.patientRepository.list()
        return output
    }
}

type Output = Patient[]