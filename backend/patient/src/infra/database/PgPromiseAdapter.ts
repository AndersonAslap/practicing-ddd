import pgp from 'pg-promise'
import { DatabaseConnection } from "./DatabaseConnection";

export class PgPromiseAdapter implements DatabaseConnection {
    connection: any

    async connect(): Promise<void> {
        this.connection = pgp()('postgres://root:root@db_manager_hospital:5432/manage_hospital')
    }

    async query(statement: string, params: any): Promise<any> {
        return await this.connection.query(statement, params)
    }

    async close(): Promise<void> {
        await this.connection.$pool.end()
    }
}