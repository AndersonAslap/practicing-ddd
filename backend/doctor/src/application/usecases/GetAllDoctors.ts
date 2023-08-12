import { Doctor } from "../../domain/Doctor";
import { RepositoryFactory } from "../factory/RepositoryFactory";
import { DoctorRepository } from "../repository/DoctorRepository";
import { UseCase } from "./UseCase";

export class GetAllDoctors implements UseCase {

    doctorRepository: DoctorRepository

    constructor(repositoryFactory: RepositoryFactory) {
        this.doctorRepository = repositoryFactory.createDoctorRepository()
    }

    async execute(): Promise<Doctor[]> {
        const doctors = await this.doctorRepository.list()
        return doctors
    }
}