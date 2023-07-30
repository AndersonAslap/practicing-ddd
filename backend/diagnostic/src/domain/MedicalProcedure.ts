export class MedicalProcedure {

    constructor(readonly id: string, readonly specialty: string, readonly description: string, readonly price: number){
        this.validate()
    }

    validate() {
        if (!this.id) throw new Error("Id is required")
        if (!this.specialty) throw new Error("Specialty is required")
        if (this.price < 0) throw new Error("Price is invalid")
    }
}