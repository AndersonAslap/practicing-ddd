import { Patient } from '../../domain/Patient'

export interface PatientRepository {
    list(): Promise<Patient[]>
    create(patient: Patient): Promise<void>
}