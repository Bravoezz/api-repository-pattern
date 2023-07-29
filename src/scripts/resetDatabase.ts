import { resetDatabase } from '../utils';
import readline from 'readline';

function askForConfirmation()
{
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question('¿Estás seguro que deseas resetar la base de datos? (s/n): ', (answer: any) => {
            rl.close();
            resolve(answer.toLowerCase() === 's');
        });
    });
}

async function runCommandWithConfirmation() {
    const confirmation = await askForConfirmation();
    if (confirmation) {
        resetDatabase();
    } 
    else {
        console.log('Aborted');
    }
}

runCommandWithConfirmation();