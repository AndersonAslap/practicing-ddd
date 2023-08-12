import { CreatePatient } from '../../application/usecases/CreatePatient'
import { RepositoryFactory } from '../../application/factory/RepositoryFactory'
import { UseCase } from '../../application/usecases/UseCase'
import { GetAllPatients } from '../../application/usecases/GetAllPatients'

export class UseCaseFactory {
    constructor(readonly repositoryFactory: RepositoryFactory){}

    createPatient(): UseCase {
        return new CreatePatient(this.repositoryFactory)
    }

    getAllPatient(): UseCase {
        return new GetAllPatients(this.repositoryFactory)
    }
}