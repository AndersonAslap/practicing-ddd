import { Doctor } from "../../domain/Doctor";
import { RepositoryFactory } from "../factory/RepositoryFactory";
import { DoctorRepository } from "../repository/DoctorRepository";
import { UseCase } from "./UseCase";

export class GetDoctorById implements UseCase {
   
    doctorRepository: DoctorRepository

    constructor(repositoryFactory: RepositoryFactory){
        this.doctorRepository = repositoryFactory.createDoctorRepository()
    }
    
    async execute(id: string): Promise<Doctor> {
        const doctor = await this.doctorRepository.getById(id)
        return doctor
    }
}