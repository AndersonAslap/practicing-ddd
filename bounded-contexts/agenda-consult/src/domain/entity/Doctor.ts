export class Doctor {

    constructor(readonly id: string, readonly name: string, readonly specialty: string){
        this.validate()
    }

    validate(){
        if (!this.id) throw new Error("Id is required")
        if (!this.name) throw new Error("Name is required")
        if (!this.specialty) throw new Error("Specialty is required")
    }
}