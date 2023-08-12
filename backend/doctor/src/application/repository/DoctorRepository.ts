import { Doctor } from '../../domain/Doctor'

export interface DoctorRepository {
    list(): Promise<Doctor[]>
    getById(id: string): Promise<Doctor>
    create(doctor:Doctor): Promise<void>
}