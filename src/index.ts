import { AppDataSource } from "./dataSource"
import app from "./app"

AppDataSource.initialize().then(async () =>
{    
    const port = process.env.APP_PORT || 3000
    app.listen(port)
    console.log("App running on port "+port)
})
.catch(error => console.log(error))