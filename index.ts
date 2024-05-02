/*
    Actividad 3.3. Analizador sintáctico
    Marco Antonio Gardida Cortés A01423221
    Miguel Jiménez Padilla A01423189
*/

const readline = require('readline');
;import { readFileSync } from 'fs';
import { token_types } from './helpers';
import { Lexer } from './Lexer';

function readFile(filePath : string) {
    const trimmedFilePath = filePath.replace(/^['"]|['"]$/g, '');
    const text = readFileSync(trimmedFilePath, 'utf-8');
    return text;
}

const index = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question(`Please drag and drop the file into this window and press Enter: `, (filePath: string) => {
        const lexer = new Lexer(readFile(filePath), token_types);
        console.log(lexer.createTokens())

        rl.close();
    });

    rl.on('close', () => {
        process.exit(0);
    });
}

index();
