import { RepositoryFactory } from "../../application/factory/RepositoryFactory";
import { PatientRepository } from "../../application/repository/PatientRepository";
import { DatabaseConnection } from "../database/DatabaseConnection";
import { PatientRepositoryDatabase } from '../repository/PatientRepositoryDatabase'

export class DatabaseRepositoryFactory implements RepositoryFactory {

    constructor(readonly connection: DatabaseConnection){}

    createPatientRepository(): PatientRepository {
        return new PatientRepositoryDatabase(this.connection)
    }
}