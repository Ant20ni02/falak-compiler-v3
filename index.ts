/**
 * Analizador léxico y sintáctico del lenguaje Falak
 * Marco Antonio Gardida Cortés A01423221
 * Miguel Jiménez Padilla A01423189
 * https://github.com/Ant20ni02/falak-compiler-v3
 */

const readline = require('node:readline');
import { readFileSync, createWriteStream } from 'fs';
var treeify = require('treeify');
import type { Token, TreeNode } from './types';
import { token_types } from './helpers';
import { action } from './action_table';
import { goto } from './goto_table';
import { rules } from './rule';

const outputFile = createWriteStream('output.txt', { flags: 'w' });

function exportTree(...args: any) {
    const message = args
        .map((arg: any) => {
            if (typeof arg === 'object') {
                return JSON.stringify(arg, null, 2);
            }
            return arg;
        })
        .join(' ');

    outputFile.write(`${new Date().toISOString()} \n\n ${message}\n`);
}

function checkForChildren(newNode: TreeNode, treeStack: TreeNode[]) {
    for (let x = 0; x < newNode.children.length; x++) {
        for (let y = treeStack.length - 1; y >= 0; y--) {
            if (treeStack[y].label === newNode.children[x].label) {
                newNode.children[x] = treeStack[y];
                treeStack.splice(y, 1);
            }
        }
    }
}

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
    const treeStack: TreeNode[] = [];
    tokens.push({
        type: '$',
        value: '',
        ln: tokens[tokens.length - 1].ln + 1,
    });

    let tokenIndex = 0;
    while (tokenIndex < tokens.length) {
        const currentToken = tokens[tokenIndex];
        const currentState = stack[stack.length - 1];
        const actions = action[currentState] || {};
        const actionEntry = actions[currentToken.type];

        console.log(
            `Current State: ${currentState}, Current Token: ${currentToken.type}`
        );

        if (actionEntry) {
            const [actionType, nextStateOrRuleNumber] = actionEntry;
            switch (actionType) {
                case 'S':
                    console.log(`Action: Shift to ${nextStateOrRuleNumber}\n`);
                    stack.push(nextStateOrRuleNumber);
                    tokenIndex++;
                    break;
                case 'R':
                    const rule = rules[nextStateOrRuleNumber];
                    console.log(
                        `Action: Reduce using rule ${nextStateOrRuleNumber} (${rule.lhs})\n`
                    );
                    rule.len !== 0 && stack.splice(-rule.len);
                    const topState = stack[stack.length - 1];
                    const gotoState = goto[topState][rule.lhs];

                    const newNode: TreeNode = {
                        label: rule.lhs,
                        children: [],
                    };

                    rule.result.forEach((element) =>
                        newNode.children.push({ label: element, children: [] })
                    );

                    checkForChildren(newNode, treeStack);

                    treeStack.push(newNode);
                    if (gotoState === undefined) {
                        throw new Error(
                            `Goto state undefined for state ${topState} and non-terminal ${rule.lhs}`
                        );
                    }
                    stack.push(gotoState);
                    break;
                case 'A':
                    console.log(
                        '\x1b[32m%s\x1b[0m',
                        '\nParsing completed successfully.'
                    );
                    console.log(
                        'Open the output.txt file to view the generated tree.'
                    );
                    exportTree(treeify.asTree(treeStack[0], true));
                    return;
                default:
                    throw new Error(
                        `Invalid action: ${actionType} on line ${currentToken.ln}`
                    );
            }
        } else {
            const expectedTokens = Object.keys(actions);
            const expectedTokensString =
                expectedTokens.length > 1
                    ? `Expected "${expectedTokens.join('" or "')}"`
                    : `Expected ${expectedTokens[0]}`;
            const gottenTokens =
                currentToken.type !== '$'
                    ? ` but got "${currentToken.value}"`
                    : '';
            console.log(
                '\x1b[31m%s\x1b[0m',
                `Syntax ERROR on line ${currentToken.ln}: ${expectedTokensString}${gottenTokens}.`
            );
            break;
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
            console.log('Tokens obtained from lexer:\n', tokens, '\n');
            console.log('Starting SLR parsing...\n');
            parseSLR(tokens);
            rl.close();
        }
    );

    rl.on('close', () => {
        process.exit(0);
    });
};

index();
