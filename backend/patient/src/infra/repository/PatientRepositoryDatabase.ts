import { PatientRepository } from "../../application/repository/PatientRepository";
import { Patient } from "../../domain/Patient";
import { DatabaseConnection } from "../database/DatabaseConnection";

export class PatientRepositoryDatabase implements PatientRepository {
    
    constructor(readonly connection: DatabaseConnection){}

    all(): Promise<Patient[]> {
        throw new Error("Method not implemented.");
    }

    async create(patient: Patient): Promise<void> {
        await this.connection.query('insert into patients(id, name, birthday, gender) values ($1, $2, $3, $4)', [
            patient.id,
            patient.name,
            patient.birthday,
            patient.gender
        ]) 
    }
}