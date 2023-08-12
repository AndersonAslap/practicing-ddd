import { randomUUID } from "crypto"
import { AppointmentHours } from "../../doctor/src/domain/AppointmentHours"

describe("Appointment hour unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            new AppointmentHours("" ,"segunda", "23:00")
        }).toThrowError("Id is required")
    })

    it("should throw error when timer is invalid", () => {
        expect(() => {
            new AppointmentHours(randomUUID() ,"segunda", "24:00")
        }).toThrowError("Timer is invalid")
    })

    it("should create an Appointment hour", () => {
        const appointmentHour = new AppointmentHours(randomUUID() ,"terça", "09:30")
        expect(appointmentHour).toBeDefined()
        expect(appointmentHour.day).toBe("terça")
        expect(appointmentHour.timer.value).toBe("09:30")
    })
})