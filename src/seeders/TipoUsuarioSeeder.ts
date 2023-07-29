import { AppDataSource } from "../dataSource";
import { TiposUsuario } from "../entities/TiposUsuario";

export async function runTiposUsuarioSeeder(){
    const model = AppDataSource.getRepository(TiposUsuario);

    const dataToSeed = [
        { tipo: 'tramitador' },
        { tipo: 'estudiante' },
        { tipo: 'estudiante-tramitador' }
    ]

    for (const data of dataToSeed)
    {
        try {
            const tipoUsuario = model.create(data);
            await model.save(tipoUsuario);
        }
        catch(error){
            console.log('TiposUsuario | El registro ya existe: '+JSON.stringify(data));
        }
    }

    console.log('Seeder para TiposUsuario completado.');
}