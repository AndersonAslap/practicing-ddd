import { PatientRepository } from "../repository/PatientRepository";

export interface RepositoryFactory {
    createPatientRepository(): PatientRepository
}