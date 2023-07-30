import { PgPromiseAdapter } from "./infra/database/PgPromiseAdapter";
import { DatabaseRepositoryFactory } from "./infra/factory/DatabaseRepositoryFactory";
import { UseCaseFactory } from "./infra/factory/UseCaseFactory";
import { ExpressAdapter } from "./infra/http/ExpressAdapter";
import { HttpController } from "./infra/http/HttpController";

const connection = new PgPromiseAdapter()
connection.connect()
const repositoryFactory = new DatabaseRepositoryFactory(connection)
const httpServer = new ExpressAdapter()
const useCasesFactory = new UseCaseFactory(repositoryFactory)
new HttpController(httpServer, useCasesFactory)
httpServer.listen(3000)