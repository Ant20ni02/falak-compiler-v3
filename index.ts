/**
 * Analizador Léxico y Sintáctico del lenguaje Falak
 * Marco Antonio Gardida Cortés A01423221
 * Miguel Jiménez Padilla A01423189
 */

const readline = require('node:readline');
import { readFileSync } from 'fs';
import type { Token } from './types';
import { token_types } from './helpers';
import { action } from './action_table';
import { goto } from './goto_table';
import { rules } from './rule';

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

function parseSLR(tokens: Token[]): void {
    let stack: number[] = [0];
    tokens.push({
        type: '$',
        value: 'end of input',
        ln: tokens[tokens.length - 1].ln,
    });

    let tokenIndex = 0;
    while (tokenIndex < tokens.length) {
        const currentToken = tokens[tokenIndex];
        const currentState = stack[stack.length - 1];
        const actionEntry = action[currentState]?.[currentToken.type];

        if (!actionEntry) {
            throw new Error(
                `Syntax error: unexpected token ${currentToken.type} on line ${currentToken.ln}`
            );
        }

        const [actionType, stateOrRuleNumber] = actionEntry;

        switch (actionType) {
            case 'S':
                if (typeof stateOrRuleNumber === 'number') {
                    stack.push(stateOrRuleNumber);
                    tokenIndex++;
                }
                break;
            case 'R':
                if (typeof stateOrRuleNumber === 'number') {
                    const rule = rules[stateOrRuleNumber - 1];
                    stack.splice(-rule.len);
                    const gotoState = goto[stack[stack.length - 1]][rule.lhs];
                    stack.push(gotoState);
                }
                break;
            case 'A':
                console.log('Parsing completed successfully.');
                return;
            default:
                throw new Error(
                    `Invalid action: ${actionType} on line ${currentToken.ln}`
                );
        }
    }
}

function processFile(filePath: string) {
    const trimmedFilePath = filePath.replace(/^['"]|['"]$/g, '');
    const text = readFileSync(trimmedFilePath, 'utf-8');
    const tokens = lexer(text);
    return tokens;
}

const index = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question(
        `Please drag and drop the file into this window and press Enter: `,
        (filePath: string) => {
            const tokens = processFile(filePath);
            parseSLR(tokens);
            rl.close();
        }
    );

    rl.on('close', () => {
        process.exit(0);
    });
};

index();
