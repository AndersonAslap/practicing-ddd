import { randomUUID } from "crypto"
import { MedicalProcedure } from "../../doctor/src/domain/MedicalProcedure"

describe("Medical procedure unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            new MedicalProcedure("", "Nutrição", "Nutrindo vidas...", 200)
        }).toThrowError("Id is required")
    })

    it("should throw error when specialty is empty", () => {
        expect(() => {
            new MedicalProcedure(randomUUID(), "", "Nutrindo vidas...", 200)
        }).toThrowError("Specialty is required")
    })

    it("should throw error when price is invalid", () => {
        expect(() => {
            new MedicalProcedure(randomUUID(), "Nutrição", "Nutrindo vidas...", -1)
        }).toThrowError("Price is invalid")
    })

    it("should create a medical procedure", () => {
        const medicalProcedure = new MedicalProcedure(randomUUID(), "Nutrição", "Nutrindo vidas...", 200)
        expect(medicalProcedure).toBeDefined()
        expect(medicalProcedure.id).toBeDefined()
        expect(medicalProcedure.specialty).toBe("Nutrição")
        expect(medicalProcedure.price).toBe(200)
    })
})