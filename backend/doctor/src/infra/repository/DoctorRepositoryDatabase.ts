import { DoctorRepository } from "../../application/repository/DoctorRepository"
import { Doctor } from "../../domain/Doctor"
import { DatabaseConnection } from '../database/DatabaseConnection'

export class DoctorRepositoryDatabase implements DoctorRepository {

    constructor(readonly connection: DatabaseConnection) {}

    async list(): Promise<Doctor[]> {
        const doctors : Doctor[] = []
        const doctorsData = await this.connection.query('select * from doctors', [])
        for(const doctor of doctorsData) {
            doctors.push(new Doctor(doctor.id, doctor.name, doctor.specialty, doctor.email, doctor.phone))
        }
        return doctors
    }

    async getById(id: string): Promise<Doctor> {
        const [doctorData] = await this.connection.query('select * from doctors where id = $1', [id])
        const doctor = new Doctor(doctorData.id, doctorData.name, doctorData.specialty, doctorData.email, doctorData.phone);
        return doctor
    }

    async create(doctor: Doctor): Promise<void> {
        await this.connection.query('insert into doctors(id, name, specialty, email, phone) values ($1, $2, $3, $4, $5)', [doctor.id, doctor.name, doctor.specialty, doctor.email.value, doctor.phone])
    }
}