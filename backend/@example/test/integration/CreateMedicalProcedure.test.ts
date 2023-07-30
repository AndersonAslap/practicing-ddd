import { randomUUID } from "crypto"
import { CreateMedicalProcedure } from "../../doctor/src/application/usecases/CreateMedicalProcedure"

describe("Medical procedure test", () => {

    it("should create a medical procedure", async () => {
        const input = {
            id: randomUUID(),
            specialty: 'Nutrição',
            description: 'Nutrindo vidas ...',
            price: 200
        }
        const createMedicalProcedure = new CreateMedicalProcedure()
        const medicalProcedure = await createMedicalProcedure.execute(input)
        expect(medicalProcedure).toBeDefined()
        expect(medicalProcedure.id).toBe(input.id)
    })
})