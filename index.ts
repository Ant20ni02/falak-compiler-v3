const readline = require('node:readline');
import { readFileSync } from 'fs';
import type { Token } from './types';
import { token_types } from './helpers';


function lexer(input: string): Token[] {
    const tokens: Token[] = [];
    let line = 1;

    while (input.length > 0) {
        let matchFound = false;

        const leadingSpaces = input.match(/^\s+/);
        if (leadingSpaces) {
            input = input.slice(leadingSpaces[0].length);
            line += (leadingSpaces[0].match(/\n/g) || []).length;
        }

        for (const type of token_types) {
            const match = input.match(type.regex);
            if (match) {
                if (!['CMT_SL', 'CMT_ML'].includes(type.type)) { // Ignoring comments
                tokens.push({ type: type.type, value: match[0], ln: line });
                }
                input = input.slice(match[0].length);
                matchFound = true;
                break;
            }
        }

        if (!matchFound) {
            throw new Error(`Unexpected token at line ${line}`);
        }
    }

    return tokens;
}

function processFile(filePath: string) {
    const trimmedFilePath = filePath.replace(/^['"]|['"]$/g, '');
    const text = readFileSync(trimmedFilePath, 'utf-8');
    const tokens = lexer(text);
    console.log(tokens);
}

const index = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question(`Please drag and drop the file into this window and press Enter: `, (filePath: string) => {
        processFile(filePath);
        rl.close();
    });

    rl.on('close', () => {
        process.exit(0);
    });
}

index();
