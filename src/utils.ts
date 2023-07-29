import { AppDataSource } from "./dataSource";

export class HttpError extends Error {
    statusCode: number
    constructor(statusCode: number, message: string) {
        super(message)
        this.statusCode = statusCode
    }
}

export function resetDatabase() 
{
    AppDataSource.initialize().then(_=>
    {
        AppDataSource.synchronize(true).then(_=>{
            console.log('Base de datos reseteada.');
            process.exit(0);
        });
    })
    .catch(error => console.log(error))
}