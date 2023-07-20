export class Diagnostic {

    constructor(readonly id: string, readonly idDoctor: string, readonly descriptionInfo: string, readonly descriptionTratament: string, readonly medicalProcedure: string[]){
        this.validate()
    }

    validate() {
        if (!this.id) throw new Error('Id is required')
        if (!this.idDoctor) throw new Error("IdDoctor is required")
        if (!this.descriptionInfo) throw new Error("Information of the patient is required")
        if (!this.descriptionTratament) throw new Error("Description tratament is required")
        if (this.medicalProcedure.length === 0) throw new Error("Medical procedure is required")
    }
}