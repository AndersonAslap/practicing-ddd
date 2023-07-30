import { UseCaseFactory } from "../factory/UseCaseFactory";
import { HttpServer } from "./HttpServer";

export class HttpController {

    constructor(httpServer: HttpServer, useCaseFactory: UseCaseFactory) {
        httpServer.on("get", "/patients", async function(params:any, body:any, headers:any){
            return {message:'hello'}
        })

        httpServer.on("post", "/patients", async function(params:any, body:any, headers:any){
            const createPatient = useCaseFactory.createPatient()
            const output = await createPatient.execute(body)
            return output    
        })
    }
}