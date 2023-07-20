import { Email } from "../../doctor/src/domain/Email"

describe("Email unit tests", () => {

    it("should throw error when email is invalid", () => {
        expect(() => {
            new Email("")
        }).toThrowError("Email is invalid")
    })

    it("should create an email", () => {
        const email = new Email("aslap@dev.com")
        expect(email).toBeDefined()
        expect(email.value).toBe("aslap@dev.com")
    })
})