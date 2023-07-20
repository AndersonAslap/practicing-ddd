import { randomUUID } from "crypto";
import { Doctor } from "../../doctor/src/domain/Doctor";

describe("Doctor unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            new Doctor("", "Aslap", "Odonto", "aslap@email.com", "81996542325")
        }).toThrowError("Id is required")
    })

    it("should throw error when name is empty", () => {
        expect(() => {
            new Doctor(randomUUID(), "", "Odonto", "aslap@email.com", "81996542325")
        }).toThrowError("Name is required")
    })

    it("should throw error when specialty is empty", () => {
        expect(() => { 
            new Doctor(randomUUID(), "Aslap", "", "aslap@gmail.com", "81996542325") 
        }).toThrowError("Specialty is required")
    })

    it("should throw error when email is invalid", () => {
        expect(() => {
            new Doctor(randomUUID(), "Aslap", "Odonto", "", "81996542325")
        }).toThrow("Email is invalid")
    })

    it("should throw error when phone is empty", () => {
        expect(() => {
            new Doctor(randomUUID(), "Aslap", "Odonto", "aslap@gmail.com", "")
        }).toThrowError("Phone is required")
    })

    it("should create a doctor", () => {
        const doctor = new Doctor(randomUUID(), "Aslap", "Odonto", "aslap@gmail.com", "81996542325");
        expect(doctor).toBeDefined()
        expect(doctor.name).toBe("Aslap")
        expect(doctor.phone).toBe("81996542325")
    })
});