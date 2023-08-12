import { RepositoryFactory } from '../../application/factory/RepositoryFactory'
import { UseCase } from "../../application/usecases/UseCase";
import { CreateDoctor } from '../../application/usecases/CreateDoctor'
import { GetAllDoctors } from '../../application/usecases/GetAllDoctors';
import { GetDoctorById } from '../../application/usecases/GetDoctorById';

export class UseCaseFactory {

    constructor(readonly repositoryFactory: RepositoryFactory){}

    createDoctor(): UseCase {
        return new CreateDoctor(this.repositoryFactory)
    }

    getAllDoctors(): UseCase {
        return new GetAllDoctors(this.repositoryFactory)
    }

    getDoctorById(): UseCase {
        return new GetDoctorById(this.repositoryFactory)
    }
}