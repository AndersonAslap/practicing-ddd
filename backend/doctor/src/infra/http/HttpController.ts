import { HttpServer } from "./HttpServer";
import { UseCaseFactory } from '../factory/UseCaseFactory'

export class HttpController {

    constructor(httpServer: HttpServer, useCaseFactory: UseCaseFactory){
        httpServer.on('get', '/doctors', async function(params:any, body:any, headers:any) {
            const getAllDoctors = useCaseFactory.getAllDoctors()
            const output = await getAllDoctors.execute()
            return output
        })

        httpServer.on('get', '/doctors/:id', async function(params:any, body:any, headers:any) {
            const id = params.id
            const getDoctorById = useCaseFactory.getDoctorById()
            const output = await getDoctorById.execute(id)
            return output
        })

        httpServer.on('post', '/doctors', async function(params:any, body:any, headers:any){
            const createDoctor = useCaseFactory.createDoctor()
            const output = await createDoctor.execute(body)
            return output
        })
    }
}