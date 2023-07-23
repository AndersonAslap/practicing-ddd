import { randomUUID } from "crypto"
import { Doctor } from "../../src/domain/entity/Doctor"

describe("Doctor unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            new Doctor("", "Anderson", "nutricionista")
        }).toThrowError("Id is required")
    })

    it("should throw error where name is empty", () => {
        expect(() => {
            new Doctor(randomUUID(), "", "nutricionista")
        }).toThrowError("Name is required")
    })

    it("should throw error when specialty is empty", () => {
        expect(() => {
            new Doctor(randomUUID(), "Anderson", "")
        }).toThrowError("Specialty is required")
    })

    it("should create a doctor", () => {
        const doctor = new Doctor(randomUUID(), "Anderson Santos", "Nutrição")
        expect(doctor).toBeDefined()
    })
})