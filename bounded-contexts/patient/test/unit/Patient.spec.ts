import { randomUUID } from "crypto"
import { Patient } from "../../../doctor/src/domain/Patient"

describe("Patient unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            new Patient("", "Anderson Aslap", new Date('1998-12-29'), 'MASCULINE')
        }).toThrowError("Id is required")
    })

    it("should throw error when name is empty", () => {
        expect(() => {
            new Patient(randomUUID(), "", new Date('1998-12-29'), 'MASCULINE')
        }).toThrowError("Name is required")
    })

    it("should throw error when name is birthday", () => {
        expect(() => {
            new Patient(randomUUID(), "Anderson", new Date(""), 'MASCULINE')
        }).toThrowError("Birthday is invalid")
    })

    it("should throw error when name is empty", () => {
        expect(() => {
            new Patient(randomUUID(), "Anderson Adolfo", new Date('1998-12-29'), '')
        }).toThrowError("Gender is required")
    })

    it("should create a Patient", () => {
        const patient = new Patient(randomUUID(), "Anderson Adolfo", new Date('1998-12-29'), 'MASCULINE')
        expect(patient).toBeDefined()
    })
})