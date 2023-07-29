import "reflect-metadata"
import { config as loadEnviromentVars} from 'dotenv'
import { DataSource } from "typeorm"

loadEnviromentVars()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST || "localhost",
    port: parseInt(process.env.MYSQL_PORT || "3306"),
    username: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASS || "",
    database: process.env.MYSQL_DATABASE || "tramite_medio",
    synchronize: true,
    logging: false,
    entities: ["src/entities/*.ts"]
})
