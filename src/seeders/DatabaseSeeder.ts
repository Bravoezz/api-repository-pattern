import { runTipoDocumentoSeeder } from './TipoDocumentoSeeder';
import { runEstacionesSeeder } from './EstacionesSeeder';
import { runEstadosTramiteSeeder } from './EstadosTramiteSeeder';
import { runTiposTramiteSeeder } from './TiposTramiteSeeder';
import { runTiposUsuarioSeeder } from './TipoUsuarioSeeder';
import { runTiposPasajeroSeeder } from './TipoPasajeroSeeder';
import { runCentrosEstudioSeeder } from './CentrosEstudioSeeder';

export async function runSeeders() 
{
    try {
        await runTipoDocumentoSeeder();
        await runEstacionesSeeder();
        await runEstadosTramiteSeeder();
        await runTiposTramiteSeeder();
        await runTiposUsuarioSeeder();
        await runTiposPasajeroSeeder();
        await runCentrosEstudioSeeder();

        console.log('Seeders completados.');
        process.exit(0);
    } 
    catch (error) {
        console.error('Error al ejecutar los seeders:', error);
    }
}