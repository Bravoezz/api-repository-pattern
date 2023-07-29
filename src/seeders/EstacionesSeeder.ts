import { AppDataSource } from "../dataSource";
import { Estaciones } from "../entities/Estaciones";

export async function runEstacionesSeeder()
{
    const model = AppDataSource.getRepository(Estaciones);

    const dataToSeed = [
        { nombre: 'Villa El Salvador' },
        { nombre: 'Pumacahua' },
        { nombre: 'Villa María' },
        { nombre: 'Parque Industrial' },
        { nombre: 'María Auxiliadora' },
        { nombre: 'San Juan' },
        { nombre: 'El Ángel' },
        { nombre: 'Gamarra' },
        { nombre: 'Unión' },
        { nombre: 'Tacna' },
        { nombre: 'Miguel Grau' },
        { nombre: 'El Porvenir' },
        { nombre: 'Los Jardines' },
        { nombre: 'Caja de Agua' },
        { nombre: 'Pirámide del Sol' },
        { nombre: 'San Borja Sur' },
        { nombre: 'La Cultura' },
        { nombre: 'Javier Prado' },
        { nombre: 'La Molina' },
        { nombre: 'Ayacucho' },
        { nombre: 'Óvalo Monitor' },
        { nombre: 'Santa Rosa' },
        { nombre: 'San Martín' },
        { nombre: 'Atocongo' },
        { nombre: 'Jorge Chávez' }
    ];

    for (const data of dataToSeed)
    {
        try {
            const estacion = model.create(data);
            await model.save(estacion);
        }
        catch(error){
            console.log('Estaciones | El registro ya existe: '+JSON.stringify(data));
        }
    }

    console.log('Seeder para Estaciones completado.');
}