import { randomUUID } from "crypto"
import { CreatePatient } from "../../../doctor/src/application/usecases/CreatePatient"
import { CreateDoctor } from "../../../doctor/src/application/usecases/CreateDoctor"
import { CreateAgendaConsult } from "../../../doctor/src/application/usecases/CreateAgendaConsult"
import { Patient } from "../../../doctor/src/domain/Patient"
import { Doctor } from "../../../doctor/src/domain/Doctor"

describe("Agenda consult tests", () => {

    it("should create a agenda consult", async () => {
        const patient = new Patient(randomUUID(), "Anderson Santos", new Date("1998-12-29"), "MASCULINE")
        const createPatient = new CreatePatient()
        await createPatient.execute(patient)
        const doctor = new Doctor(randomUUID(), "Anderson Aslap", "Nutricionista", "anderson@nutri.io", "81956525652")
        const createDoctor = new CreateDoctor()
        await createDoctor.execute(doctor)
        const input = {
            id: randomUUID(),
            patient,
            doctor,
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