import { AppDataSource } from "../dataSource";
import { TiposTramite } from "../entities/TiposTramite";

export async function runTiposTramiteSeeder(){
    const model = AppDataSource.getRepository(TiposTramite);

    const dataToSeed = [
        { tramite: 'Nuevo' },
        { tramite: 'Duplicado' },
        { tramite: 'Renovación' }
    ]

    for (const data of dataToSeed)
    {
        try {
            const tipoTramite = model.create(data);
            await model.save(tipoTramite);
        }
        catch(error){
            console.log('TiposTramite | El registro ya existe: '+JSON.stringify(data));
        }
    }

    console.log('Seeder para TiposTramite completado.');
}