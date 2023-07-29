import { AppDataSource } from "../dataSource";
import { TiposDocumento } from "../entities/TiposDocumento";

export async function runTipoDocumentoSeeder() 
{
    const model = AppDataSource.getRepository(TiposDocumento);

    const dataToSeed = [
        { documento: 'DNI', abreviatura: 'DNI' },
        { documento: 'Pasaporte', abreviatura: 'Pasaporte' },
        { documento: 'Carnet de Extranjería', abreviatura: 'CE' },
    ];

    for (const data of dataToSeed)
    {
        try {
            const tipoDocumento = model.create(data);
            await model.save(tipoDocumento);
        }
        catch(error){
            console.log('TiposDocumento | El registro ya existe: '+JSON.stringify(data));
        }
    }

    console.log('Seeder para TiposDocumento completado.');
}
