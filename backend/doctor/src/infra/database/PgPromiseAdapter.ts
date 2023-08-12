import pgp from 'pg-promise'
import { DatabaseConnection } from "./DatabaseConnection";

export class PgPromiseAdapter implements DatabaseConnection {
    connection: any

    async connect(): Promise<void> {
        this.connection = pgp()('postgres://root:root@db:5432/db_hospital')
    }

    async query(statement: any, params: any): Promise<any> {
        return await this.connection.query(statement, params)
    }

    async close(): Promise<void> {
        await this.connection.$pool.end()
    }    
}