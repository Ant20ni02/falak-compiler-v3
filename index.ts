/**
 * Analizador Léxico y Sintáctico del lenguaje Falak
 * Marco Antonio Gardida Cortés A01423221
 * Miguel Jiménez Padilla A01423189
 */

const readline = require('node:readline');
import { readFileSync } from 'fs';
var treeify = require('treeify');
import type { Token, TreeNode } from './types';
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
    const treeStack: TreeNode[] = [];
    tokens.push({
        type: '$',
        value: 'xd',
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
                        `Action: Reduce using rule ${nextStateOrRuleNumber} (${
                            rule.lhs
                        } -> ${Array(rule.len).fill('symbol').join(' ')})\n`
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

                    let found = false;

                    for (var x = 0; x < treeStack.length; x++) {
                        for (var y = 0; y < newNode.children.length; y++) {
                            if (
                                !found &&
                                treeStack[x].label === newNode.children[y].label
                            ) {
                                newNode.children[y] = treeStack[x];
                                treeStack.splice(x, 1);
                                found = true;
                                break;
                            }
                        }
                        if (found) {
                            break;
                        }
                    }

                    treeStack.push(newNode);
                    if (gotoState === undefined) {
                        throw new Error(
                            `Goto state undefined for state ${topState} and non-terminal ${rule.lhs}`
                        );
                    }
                    stack.push(gotoState);
                    break;
                case 'A':
                    console.log('Parsing completed successfully.');
                    console.log(treeify.asTree(treeStack[0], true));
                    return;
                default:
                    throw new Error(
                        `Invalid action: ${actionType} on line ${currentToken.ln}`
                    );
            }
        } else {
            throw new Error(
                `Syntax error: unexpected token '${currentToken.type}' on line ${currentToken.ln}`
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
