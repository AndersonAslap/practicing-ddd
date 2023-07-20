import { randomUUID } from "crypto"
import { CreateDoctor } from "../../src/application/usecases/CreateDoctor"

describe("Create doctor test", () => {

    it("should create a doctor", async () => {
        const input = {
            id: randomUUID(),
            name: 'Anderson',
            specialty: 'Oftalmologia',
            email: 'aslap@medical.com',
            phone: '81999996565'
        }
        const createDoctor = new CreateDoctor()
        const doctor = await createDoctor.execute(input)
        expect(doctor).toBeDefined()
        expect(doctor.id).toBe(input.id)
    })
})