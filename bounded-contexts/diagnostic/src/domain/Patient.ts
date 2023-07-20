import { Diagnostic } from "./Diagnostic"

export class Patient {
    readonly medical_history?: Diagnostic[]

    constructor(readonly id: string, readonly name: string, readonly birthday: Date, readonly gender: string, medical_history: Diagnostic[] = []){
        this.medical_history = medical_history
        this.validate()
    }

    validate() {
        if (!this.id) throw new Error("Id is required")
        if (!this.name) throw new Error("Name is required")
        if (this.birthday.toString() == "Invalid Date") throw new Error("Birthday is invalid")
        if (!this.gender) throw new Error("Gender is required")
    }
}