import { Timer } from "../../src/domain/value-object/Timer"

describe("Timer unit tests", () => {

    it("should throw error when timer is invalid", () => {
        expect(() => {
            new Timer("24:00")
        }).toThrowError("Timer is invalid")
    })

    it("should create a timer", () => {
        const timer = new Timer("00:00")
        expect(timer).toBeDefined()
        expect(timer.value).toBe("00:00")
    })
})