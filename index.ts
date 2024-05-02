const readline = require('node:readline');
import { readFileSync } from 'fs';
import type { Token } from './types';
import { token_types } from './helpers';


function lexer(input: string): Token[] {
    const tokens: Token[] = [];
    let line = 1;

    while (input.length > 0) {
        let matchFound = false;

        let leadingWhitespaceMatch = input.match(/^\s+/);
        if (leadingWhitespaceMatch) {
            line += (leadingWhitespaceMatch[0].match(/\n/g) || []).length;
            input = input.substring(leadingWhitespaceMatch[0].length);
        }

        for (const { type, regex } of token_types) {
            const match = input.match(regex);
            if (match) {
                if (!['CMT_SL', 'CMT_ML'].includes(type)) {
                    tokens.push({ type, value: match[0], ln: line });
                }
                input = input.substring(match[0].length);
                const newLinesInMatch = match[0].match(/\n/g);
                if (newLinesInMatch) {
                    line += newLinesInMatch.length;
                }
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
