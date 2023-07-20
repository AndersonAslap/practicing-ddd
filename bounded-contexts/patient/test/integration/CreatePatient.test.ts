import { randomUUID } from "crypto";
import { CreatePatient } from "../../../doctor/src/application/usecases/CreatePatient";

describe("Create patient test", () => {
    
    it("should create a patient", async () => {
        const input = {
            id: randomUUID(),
            name: "Anderson",
            birthday: new Date("1998-12-29"),
            gender: 'MASCULINE',
        }
        const createPatient = new CreatePatient()
        const patient = await createPatient.execute(input)
        expect(patient.id).toBe(input.id)
        expect(patient.name).toBe('Anderson')
        expect(patient.birthday.toString()).toBe(new Date("1998-12-29").toString())
        expect(patient.gender).toBe('MASCULINE')
    })
})