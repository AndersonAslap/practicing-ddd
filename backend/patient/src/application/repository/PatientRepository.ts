import { Patient } from '../../domain/Patient'

export interface PatientRepository {
    all(): Promise<Patient[]>
    create(patient: Patient): Promise<void>
}