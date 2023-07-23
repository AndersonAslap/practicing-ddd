import { randomUUID } from "crypto"
import { Patient } from "../../src/domain/entity/Patient"

describe("Doctor unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            new Patient("", "Aslap")
        }).toThrowError("Id is required")
    })

    it("should throw error when name is empty", () => {
        expect(() => {
            new Patient(randomUUID(), "")
        }).toThrowError("Name is required")
    })

    it("should create a patient", () => {
        const id = randomUUID()
        const patient = new Patient(id, "Anderson Santos")
        expect(patient).toBeDefined()
        expect(patient.id).toBe(id)
    })
})