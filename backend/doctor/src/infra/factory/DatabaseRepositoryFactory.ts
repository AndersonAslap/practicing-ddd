import { RepositoryFactory } from "../../application/factory/RepositoryFactory";
import { DoctorRepository } from "../../application/repository/DoctorRepository";
import { DatabaseConnection } from "../database/DatabaseConnection";
import { DoctorRepositoryDatabase } from "../repository/DoctorRepositoryDatabase";

export class DatabaseRepositoryFactory implements RepositoryFactory {

    constructor(readonly connection: DatabaseConnection){}

    createDoctorRepository(): DoctorRepository {
        return new DoctorRepositoryDatabase(this.connection)
    }
}