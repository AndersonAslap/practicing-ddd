import { AppointmentHours } from "./AppointmentHours";
import { Email } from "./Email";

export class Doctor {
    email: Email
    appointment_hours: AppointmentHours[] 

    constructor(readonly id: string, readonly name: string, readonly specialty: string, email: string, readonly phone: string){
        this.email = new Email(email)
        this.appointment_hours = []
        this.validate()
    }

    addAppointmentHour(appointmentHour: AppointmentHours) {
        if(this.appointment_hours.indexOf(appointmentHour) !== -1 ) throw new Error("Timer already exists") 
        this.appointment_hours.push(appointmentHour)
    }

    validate(){
        if (!this.id) throw new Error("Id is required")
        if (!this.name) throw new Error("Name is required")
        if (!this.specialty) throw new Error("Specialty is required")
        if (!this.phone) throw new Error("Phone is required") 
    }
}