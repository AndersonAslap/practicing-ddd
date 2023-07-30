export class MedicalHistory {
    dateOcurred: Date

    constructor(readonly id: string, readonly doctorId: string, readonly description: string){
        this.dateOcurred = new Date()
    }
}