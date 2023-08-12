export interface DatabaseConnection {
    connect(): Promise<void> 
    query(statement:any, params:any): Promise<any>
    close(): Promise<void>
}