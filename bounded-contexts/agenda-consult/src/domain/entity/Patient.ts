export class Patient {

    constructor(readonly id: string, readonly name: string){
        this.validate()
    }

    validate() {
        if (!this.id) throw new Error("Id is required")
        if (!this.name) throw new Error("Name is required")
    }
}