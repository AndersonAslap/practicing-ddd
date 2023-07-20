import { randomUUID } from "crypto"
import { AgendaConsult } from "../../../doctor/src/domain/AgendaConsult"
import { Patient } from "../../../doctor/src/domain/Patient"
import { Doctor } from "../../../doctor/src/domain/Doctor"

let patient: Patient
let doctor: Doctor

describe("Agenda consult unit tests", () => {

    beforeAll(() => {
        patient = new Patient(randomUUID(), "Anderson Aslap", new Date("1998-12-29"), "MASCULINE")
        doctor = new Doctor(randomUUID(), "Beatriz", "Nutricionista", "beatriz@nutri.io", "81932356523")
    })

    it("should throw error when id is empty", () => {
        expect(() => {
            new AgendaConsult("", patient, doctor, new Date("2023-07-14"), "12:00", 1)
        }).toThrowError("Id is required")
    })

    it("should throw error when date is invalid", () => {
        expect(() => {
            new AgendaConsult(randomUUID(), patient, doctor, new Date("abc"), "12:00", 1)
        }).toThrowError("Date is invalid")
    })

    it("should throw error when timer is invalid", () => {
        expect(() => {
            new AgendaConsult(randomUUID(), patient, doctor, new Date("2023-07-14"), "127:00", 1)
        }).toThrowError("Timer is invalid")
    })

    it("should throw error when estimated hours is invalid", () => {
        expect(() => {
            new AgendaConsult(randomUUID(), patient, doctor, new Date("2023-07-14"), "12:00", 0)
        }).toThrowError("Estimated hours is invalid")
    })

    it("should create an agenda consult", () => {
        const agendaConsult = new AgendaConsult(randomUUID(), patient, doctor, new Date("2023-07-14"), "12:00", 1)
        expect(agendaConsult).toBeDefined()
        expect(agendaConsult.id).toBeDefined()
    })
})