import { AppDataSource } from "../dataSource";
import { TiposPasajero } from "../entities/TiposPasajero";

export async function runTiposPasajeroSeeder()
{
    const model = AppDataSource.getRepository(TiposPasajero);

    const dataToSeed = [
        {tipo: 'escolar', tipoCe: 'Colegio Privado/Estatal'},
        {tipo: 'no escolarizado', tipoCe: 'Colegio no Escolarizado'},
        {tipo: 'instituto', tipoCe: 'Instituto'},
        {tipo: 'universitario', tipoCe: 'Universidad'}
    ]

    for (const data of dataToSeed){
        try {
            const tipoPasajero = model.create(data);
            await model.save(tipoPasajero);
        }
        catch(error){
            console.log('TiposPasajero | El registro ya existe: '+JSON.stringify(data));
        }
    }

    console.log('Seeder para TiposPasajero completado.');
}