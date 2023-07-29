import { AppDataSource } from "../dataSource";
import { EstadosTramite } from "../entities/EstadosTramite";

export async function runEstadosTramiteSeeder()
{
    const model = AppDataSource.getRepository(EstadosTramite);

    const dataToSeed = [
        {"estado":"Solicitado"},
        {"estado":"Emitido"},
        {"estado":"Anulado"}
    ];

    for (const data of dataToSeed)
    {
        try {
            const estadoTramite = model.create(data);
            await model.save(estadoTramite);
        }
        catch(error){
            console.log('EstadosTramite | El registro ya existe: '+JSON.stringify(data));
        }
    }

    console.log('Seeder para EstadosTramite completado.');
}