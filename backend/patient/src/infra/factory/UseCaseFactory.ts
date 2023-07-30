import { CreatePatient } from '../../application/usecases/CreatePatient'
import { RepositoryFactory } from '../../application/factory/RepositoryFactory'

export class UseCaseFactory {
    constructor(readonly repositoryFactory: RepositoryFactory){}

    createPatient(): CreatePatient {
        return new CreatePatient(this.repositoryFactory)
    }
}