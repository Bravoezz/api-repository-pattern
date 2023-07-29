import morgan from "morgan"
import express from "express"
import bodyParser from "body-parser"
import cors from 'cors'
import configureRoutes from "./routes/index"
import { httpErrorHandler } from "./middlewares/httperror.middleware"

/* Llamar a express y definir el puerto */
const app = express()

/* Loguear las peticiones */
app.use(morgan('combined', {
    skip: (_, res) => res.statusCode < 400
}))

/* configurar cors */
app.use(cors())

/* Parsear el body de las peticiones */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Configurar las rutas */
configureRoutes(app)

/* Middleware(s) */
app.use(httpErrorHandler)

export default app;