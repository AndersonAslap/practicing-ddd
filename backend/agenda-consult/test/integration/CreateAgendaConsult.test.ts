import { randomUUID } from "crypto"
import { CreateAgendaConsult } from "../../src/application/usecases/CreateAgendaConsult"

describe("Agenda consult tests", () => {

    it("should create a agenda consult", async () => {
        const input = {
            id: randomUUID(),
            patient: {
                id: randomUUID(),
                name: "Anderson Santos"
            },
            doctor: {
                id: randomUUID(),
                name: "Anderson Aslap",
                specialty: "Nutricionista"
            },
            date: new Date("1998-12-29"),
            timer: "14:00",
            estimatedHours: 2
        }
        const createAgendaConsult = new CreateAgendaConsult()
        const agendaConsult = await createAgendaConsult.execute(input)
        expect(agendaConsult).toBeDefined()
        expect(agendaConsult.id).toBe(input.id)
    })
})