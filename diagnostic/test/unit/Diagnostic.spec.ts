import { randomUUID } from "crypto"
import { Diagnostic } from "../../../doctor/src/domain/Diagnostic"

describe("Diagnostic unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            new Diagnostic("", randomUUID(), "Description info ..." ,"Description tratament ...", ['Nutrição'])
        }).toThrowError("Id is required")
    })

    it("should throw error when idDoctor is empty", () => {
        expect(() => {
            new Diagnostic(randomUUID(), "", "Description info ..." ,"Description tratament ...", ['Nutrição'])
        }).toThrowError("IdDoctor is required")
    })

    it("should throw error when information of the patient is empty", () => {
        expect(() => {
            new Diagnostic(randomUUID(), randomUUID(), "", "Description tratament ...", ['Nutrição'])
        }).toThrowError("Information of the patient is required")
    })

    it("should throw error when description tratament is empty", () => {
        expect(() => {
            new Diagnostic(randomUUID(), randomUUID(), "Description info ...", "", ['Nutrição'])
        }).toThrowError("Description tratament is required")
    })

    it("should throw error when medical procedure is empty", () => {
        expect(() => {
            new Diagnostic(randomUUID(), randomUUID(), "Description info ...", "Description tratament ...", [])
        }).toThrowError("Medical procedure is required")
    })

    it("should create a diagnostic", () => {
        const diagnostic = new Diagnostic(randomUUID(), randomUUID(), "Description info ...", "Description tratament ...", ['Nutrição'])
        expect(diagnostic).toBeDefined()
    })
})