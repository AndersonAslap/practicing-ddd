import { DoctorRepository } from "../repository/DoctorRepository";

export interface RepositoryFactory {
    createDoctorRepository(): DoctorRepository
}